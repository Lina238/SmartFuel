package com.example.SmartFuel.rest.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.sun.istack.NotNull;
@Entity
@Table(name="distributeur ")
public class distributeur {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	   @NotNull
	    @NotEmpty
	String nom;
	public distributeur() {
	}
	public distributeur(Integer id, String nom) {
		super();
		this.id = id;
		this.nom = nom;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}

}
