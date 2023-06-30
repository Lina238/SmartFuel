package com.example.SmartFuel.rest.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="gisement")
public class gisement {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)	
Integer id;
String nom;
Double capacite_totale;
Integer seuil;
Double quantite_actuelle;
@ManyToOne
@JsonBackReference 
@JoinColumn(name = "type_gisement")
type_gisement type_gisement;
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
public Double getCapacite_totale() {
	return capacite_totale;
}
public void setCapacite_totale(Double capacite_totale) {
	this.capacite_totale = capacite_totale;
}
public Integer getSeuil() {
	return seuil;
}
public void setSeuil(Integer seuil) {
	this.seuil = seuil;
}
public Double getQuantite_actuelle() {
	return quantite_actuelle;
}
public void setQuantite_actuelle(Double quantite_actuelle) {
	this.quantite_actuelle = quantite_actuelle;
}
public type_gisement getType_gisement() {
	return type_gisement;
}
public void setType_gisement(type_gisement type_gisement) {
	this.type_gisement = type_gisement;
}
public gisement(Integer id, String nom, Double capacite_totale, Integer seuil, Double quantite_actuelle,
		type_gisement type_gisement) {
	super();
	this.id = id;
	this.nom = nom;
	this.capacite_totale = capacite_totale;
	this.seuil = seuil;
	this.quantite_actuelle = quantite_actuelle;
	this.type_gisement = type_gisement;
}
public gisement() {

}
}
