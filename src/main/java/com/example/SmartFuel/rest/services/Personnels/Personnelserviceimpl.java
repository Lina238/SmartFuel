package com.example.SmartFuel.rest.services.Personnels;
import java.time.LocalDateTime;


import java.util.*;
import com.example.SmartFuel.rest.repository.chefrepository;
import com.example.SmartFuel.rest.repository.Type_gisementrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartFuel.rest.models.Personnel;
import com.example.SmartFuel.rest.models.distributeur;
import com.example.SmartFuel.rest.models.distributeur_gisement;
import com.example.SmartFuel.rest.models.gisement;
import com.example.SmartFuel.rest.models.mouvement_gisement;
import com.example.SmartFuel.rest.models.chef;
import com.example.SmartFuel.rest.models.table_dachat;
import com.example.SmartFuel.rest.models.table_de_vente;
import com.example.SmartFuel.rest.models.type_gisement;
import com.example.SmartFuel.rest.repository.Distributeurrepository;
import com.example.SmartFuel.rest.repository.SmartFuelRepository;
import com.example.SmartFuel.rest.repository.distributeur_gisementrepository;
import com.example.SmartFuel.rest.repository.gisementrepository;
import com.example.SmartFuel.rest.repository.mouvement_gisementrepository;
import com.example.SmartFuel.rest.repository.table_dachatrepository;
import com.example.SmartFuel.rest.repository.table_de_venterepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.RequiredArgsConstructor;
import securityconfig.token.TokenRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.SmartFuel.rest.models.Token;
@Service
@JsonIgnoreProperties(ignoreUnknown = true)
public class Personnelserviceimpl implements Personnelservice {
//gestion 	personnel
	@Autowired
	  private TokenRepository tokenRepository;
  private final SmartFuelRepository smartFuelRepository;
  @Autowired
  public  Personnelserviceimpl(SmartFuelRepository userRepo){
      this.smartFuelRepository = userRepo;
  }
  @Autowired
  private PasswordEncoder passwordEncoder; // Injection du PasswordEnco
  @Override
  public List<Personnel> getallpersonnels() {
	
	   // Use smartFuelRepository instead of SmartFuelRepository
	    return    (List<Personnel>) smartFuelRepository.findAll();	   
	}
  @Override
   public Personnel getperso( Integer id) {
	   return smartFuelRepository.findById(id).orElse(null);
   }

@Override
  public String updatepersonnel(Integer id, Personnelrequest perso) {
		System.out.println(perso.toString());
		System.out.println(perso.getUsername());
		
          Personnel personnelToUpdate = getperso(id);
	    if (personnelToUpdate !=null) {  
	        String newNom = perso.getUsername();	
	        String hashedPassword = passwordEncoder.encode(perso.getPassword());
	        personnelToUpdate.setUsername(newNom);
	        personnelToUpdate.setPassword(hashedPassword);
	        personnelToUpdate.setRole(perso.getRole());
	        personnelToUpdate.setChef(perso.getChef());
	        personnelToUpdate.setAuthorities(perso.getRole());
	        smartFuelRepository.save(personnelToUpdate);
	    } else {
	        throw new IllegalArgumentException("La personne avec l'ID spécifié n'existe pas");
	    }
	    return "success";
	}

  @Override
   public String deletepersonnel( Integer id){

	  Personnel personnelToDelete = getperso( id);
      List<Token> tokensToDelete = personnelToDelete.getTokens();
      tokenRepository.deleteAll(tokensToDelete);
	   smartFuelRepository.deleteById(id);
	   return "succed";
 }
}





