package com.example.SmartFuel.rest.services.Chefservice;

import javax.validation.constraints.NotEmpty;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class Chefrequest {
	@NotNull 
	@NotEmpty
     String nom;

	public Chefrequest(String nom) {
		super();
		this.nom = nom;
	}
	public Chefrequest() {

	}
	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}
     
}
