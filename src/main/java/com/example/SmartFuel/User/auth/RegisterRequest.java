package com.example.SmartFuel.User.auth;

import com.example.SmartFuel.permi.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.example.SmartFuel.rest.models.chef;
@Data
public class RegisterRequest {
  private String username;
  private String password;
  private Role role;
  private chef chef;

public RegisterRequest(String username, String password, Role role, com.example.SmartFuel.rest.models.chef chef) {
	super();
	this.username = username;
	this.password = password;
	this.role = role;
	this.chef = chef;
}
public chef getChef() {
	return chef;
}
public void setChef(chef chef) {
	this.chef = chef;
}
public RegisterRequest() {

}
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
public Role getRole() {
	return role;
}
public void setRole(Role role) {
	this.role = role;
}
  
}
