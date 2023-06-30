package com.example.SmartFuel.rest.models;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="table_dachat ")
public class table_dachat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
Integer id;
Integer id_gisement;
Double quantite;
Double prix_dachat;
LocalDateTime date_de_creation;
LocalDateTime date_de_modification;
String unite_de_mesure;
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public Integer getId_gisement() {
	return id_gisement;
}
public void setId_gisement(Integer id_gisement) {
	this.id_gisement = id_gisement;
}
public Double getQuantite() {
	return quantite;
}
public void setQuantite(Double quantite) {
	this.quantite = quantite;
}
public Double getPrix_dachat() {
	return prix_dachat;
}
public void setPrix_dachat(Double prix_dachat) {
	this.prix_dachat = prix_dachat;
}
public LocalDateTime getDate_de_creation() {
	return date_de_creation;
}
public void setDate_de_creation(LocalDateTime date_de_creation) {
	this.date_de_creation = date_de_creation;
}
public LocalDateTime getDate_de_modification() {
	return date_de_modification;
}
public void setDate_de_modification(LocalDateTime date_de_modification) {
	this.date_de_modification = date_de_modification;
}
public String getUnite_de_mesure() {
	return unite_de_mesure;
}
public void setUnite_de_mesure(String unite_de_mesure) {
	this.unite_de_mesure = unite_de_mesure;
}
public table_dachat(Integer id, Integer id_gisement, Double quantite, Double prix_dachat,
		LocalDateTime date_de_creation, LocalDateTime date_de_modification, String unite_de_mesure) {
	super();
	this.id = id;
	this.id_gisement = id_gisement;
	this.quantite = quantite;
	this.prix_dachat = prix_dachat;
	this.date_de_creation = date_de_creation;
	this.date_de_modification = date_de_modification;
	this.unite_de_mesure = unite_de_mesure;
}
public table_dachat() {
	
}

}
