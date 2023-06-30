package com.example.SmartFuel.rest.models;
import  javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
@Entity
@Table(name="personnel")
public class Personnel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	String nom;
	@OneToOne
	@JoinColumn(name = "role")   
	role role;
	@ManyToOne
	@JsonBackReference 
	@JoinColumn(name = "chef")
	chef chef;

	public Personnel(Integer id, String nom, role role,chef chef) {
		super();
		this.id = id;
		this.nom= nom;
		this.role = role;
		this.chef=chef;

	}
	public Personnel() {
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
	public role getRole() {
		return role;
	}
	public void setRole(role role) {
		this.role = role;
	}
	public chef getChef() {
		return chef;
	}
	public void setChef(chef chef) {
		this.chef = chef;
	}
	
}
