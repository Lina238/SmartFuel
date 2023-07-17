package com.example.SmartFuel.User.auth;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import securityconfig.JwtService;
import securityconfig.token.TokenRepository;
import securityconfig.token.TokenType;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.io.IOException;
import com.example.SmartFuel.rest.models.Personnel;
import com.example.SmartFuel.rest.models.Token;
import com.example.SmartFuel.rest.repository.SmartFuelRepository;
@Service
@RequiredArgsConstructor
public class AuthenticationService {
	@Autowired
	private SmartFuelRepository repository;
	@Autowired
  private TokenRepository tokenRepository;
  @Autowired
  private PasswordEncoder passwordEncoder;
  @Autowired
  private JwtService jwtService;
  @Autowired
  private AuthenticationManager authenticationManager;
  @Autowired
  private EntityManagerFactory entityManagerFactory;

  public AuthenticationResponse register(RegisterRequest request) {
	    Personnel user = new Personnel();
	    user.setUsername(request.getUsername());
	    user.setRole(request.getRole());
	    user.setPassword(passwordEncoder.encode(request.getPassword()));
         user.setChef(request.getChef());
	    var savedUser = repository.save(user); // Save the user and obtain the managed entity

	    var jwtToken = jwtService.generateToken(savedUser); // Use the managed entity
	    var refreshToken = jwtService.generateRefreshToken(savedUser); // Use the managed entity
	    saveUserToken(savedUser, jwtToken); // Pass the managed entity to the method

	    AuthenticationResponse auth = new AuthenticationResponse();
	    auth.setAccessToken(jwtToken);
	    auth.setRefreshToken(refreshToken);
	    return auth;
	}


  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getUsername(),
            request.getPassword()
        )
    );
    var user = repository.findByUsername(request.getUsername())
        .orElseThrow();
    var jwtToken = jwtService.generateToken(user);
    var refreshToken = jwtService.generateRefreshToken(user);
    revokeAllUserTokens(user);
    saveUserToken(user, jwtToken);
   
    AuthenticationResponse auth =new  AuthenticationResponse();
    auth.setAccessToken(jwtToken);
    auth.setRefreshToken(refreshToken);
    auth.setRole(user.getRole());     
    auth.setUsername(user.getUsername());
    return auth;
  }

  private void saveUserToken(Personnel user, String jwtToken) {
	    EntityManager entityManager = entityManagerFactory.createEntityManager();
	    Token token = new Token();
	    token.setUser(user);
	    token.setExpired(false);
	    token.setRevoked(false);
	    token.setTokenType(TokenType.BEARER);
	    token.setToken(jwtToken);
	    if (user.getId() == null) {
	        user = entityManager.merge(user); // Réattacher l'entité détachée
	    }
	    tokenRepository.save(token);
	    entityManager.close();
	}



  private void revokeAllUserTokens(Personnel user) {
    var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
    if (validUserTokens.isEmpty())
      return;
    validUserTokens.forEach(token -> {
      token.setExpired(true);
      token.setRevoked(true);
    });
    tokenRepository.saveAll(validUserTokens);
  }

  public void refreshToken(
          HttpServletRequest request,
          HttpServletResponse response
  ) throws IOException {
    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
    final String refreshToken;
    final String userEmail;
    if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
      return;
    }
    refreshToken = authHeader.substring(7);
    userEmail = jwtService.extractUsername(refreshToken);
    if (userEmail != null) {
      var user = this.repository.findByUsername(userEmail)
              .orElseThrow();
      if (jwtService.isTokenValid(refreshToken, user)) {
        var accessToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);
        AuthenticationResponse authResponse = new AuthenticationResponse();
       authResponse.setAccessToken(accessToken);
       authResponse.setRefreshToken(refreshToken);
   
        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
      }
    }
  }
}
