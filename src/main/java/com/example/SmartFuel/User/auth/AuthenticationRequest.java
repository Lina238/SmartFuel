package com.example.SmartFuel.User.auth;

import lombok.AllArgsConstructor;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data

public class AuthenticationRequest {

 String username;
  String password;
  
public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public AuthenticationRequest(String username, String password) {
	super();
	this.username = username;
	this.password = password;
}
public AuthenticationRequest() {

}
}
