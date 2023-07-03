package com.example.SmartFuel.rest.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="chef")
public class chef {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	String nom;
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	@OneToMany(mappedBy="chef")
	@JsonManagedReference
	List <Personnel> personnel;
	@OneToMany(mappedBy="user_opperation")
	@JsonManagedReference
	List <table_de_vente> table_de_vente;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}



	public chef(Integer id, String nom, List<Personnel> personnel,
			List<com.example.SmartFuel.rest.models.table_de_vente> table_de_vente) {
		super();
		this.id = id;
		this.nom = nom;
		this.personnel = personnel;
		this.table_de_vente = table_de_vente;
	}
	public List<table_de_vente> getTable_de_vente() {
		return table_de_vente;
	}
	public void setTable_de_vente(List<table_de_vente> table_de_vente) {
		this.table_de_vente = table_de_vente;
	}
	public List<Personnel> getPersonnel() {
		return personnel;
	}
	
	public void setPersonnel(List<Personnel> personnel) {
		this.personnel = personnel;
	}
	public chef() {

	}
	
}
