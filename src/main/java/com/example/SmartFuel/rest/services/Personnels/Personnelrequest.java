package com.example.SmartFuel.rest.services.Personnels;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.example.SmartFuel.permi.Role;
import com.example.SmartFuel.rest.models.chef;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Personnelrequest {
    String username;
    String password;
	Role role;
	 chef chef;
	public Personnelrequest(String username, String password, Role role) {
		super();
		this.username = username;
		this.password = password;
		this.role = role;
	}
	
	public chef getChef() {
		return chef;
	}

	public void setChef(chef chef) {
		this.chef = chef;
	}

	public Personnelrequest() {

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
