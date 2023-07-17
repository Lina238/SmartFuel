package com.example.SmartFuel.User.auth;

import com.example.SmartFuel.permi.Role;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class AuthenticationResponse {

  @JsonProperty("access_token")
  private String accessToken;
  @JsonProperty("refresh_token")
  private String refreshToken;
  @JsonProperty("role")
  private Role role;
  @JsonProperty("username")
  private String username;
public Role getRole() {
	return role;
}
public void setRole(Role role) {
	this.role = role;
}

public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public AuthenticationResponse(String accessToken, String refreshToken, Role role, String username) {
	super();
	this.accessToken = accessToken;
	this.refreshToken = refreshToken;
	this.role = role;
	this.username = username;
}
public AuthenticationResponse() {

}
public String getAccessToken() {
	return accessToken;
}
public void setAccessToken(String accessToken) {
	this.accessToken = accessToken;
}
public String getRefreshToken() {
	return refreshToken;
}
public void setRefreshToken(String refreshToken) {
	this.refreshToken = refreshToken;
}
}
