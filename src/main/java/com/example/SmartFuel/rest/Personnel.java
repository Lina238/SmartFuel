package com.example.SmartFuel.rest;
import  javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="personnel")
public class Personnel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	String nom;
	Integer chef;
	String role;

	public Personnel(Integer id, String name, String role,Integer chef) {
		super();
		this.id = id;
		this.nom= name;
		this.chef=chef;	
		this.role = role;

	}
	public Personnel() {
	}
	public Integer getChef() {
		return chef;
	}
	public void setChef(Integer chef) {
		this.chef = chef;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return nom;
	}
	public void setName(String name) {
		this.nom = name;  
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}
