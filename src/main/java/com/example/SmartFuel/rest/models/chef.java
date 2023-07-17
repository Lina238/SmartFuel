package com.example.SmartFuel.rest.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

import lombok.Data;
@Data
@Entity
@Table(name="chef")
public class chef {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	   @NotNull
	    @NotEmpty(message = "Le champ 'nom' ne peut pas être vide")
	   @JsonProperty("nom")
	String nom;

	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}

	@OneToMany(mappedBy="user_opperation")

	  @JsonManagedReference
	List <table_de_vente> table_de_vente;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}



//	public List<Personnel> getPersonnels() {
//		return personnels;
//	}
//	public void setPersonnels(List<Personnel> personnels) {
//		this.personnels = personnels;
//	}
	public chef(Integer id,String nom, 
			List<com.example.SmartFuel.rest.models.table_de_vente> table_de_vente) {
		super();
		this.id = id;
		this.nom = nom;
//	 this.personnels=personnels;
		this.table_de_vente = table_de_vente;
	}
	public List<table_de_vente> getTable_de_vente() {
		return table_de_vente;
	}
	public void setTable_de_vente(List<table_de_vente> table_de_vente) {
		this.table_de_vente = table_de_vente;
	}
	
	public chef() {

	}
	
}
