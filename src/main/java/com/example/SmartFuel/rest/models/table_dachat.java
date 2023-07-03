package com.example.SmartFuel.rest.models;

import java.time.LocalDateTime;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name="table_dachat")
public class table_dachat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
Integer id;
@ManyToOne
@JsonBackReference 
@JoinColumn(name = "id_gisement")
gisement gisement;
Double quantite;
Double prix_dachat;
@CreationTimestamp
@Column(name = "date_de_creation")
LocalDateTime date_de_creation;
@UpdateTimestamp
@Column(name = "date_de_modification")
LocalDateTime date_de_modification;
String unite_de_mesure;
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
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


public table_dachat(Integer id, com.example.SmartFuel.rest.models.gisement gisement, Double quantite,
		Double prix_dachat, LocalDateTime date_de_creation, LocalDateTime date_de_modification,
		String unite_de_mesure) {
	super();
	this.id = id;
	this.gisement = gisement;
	this.quantite = quantite;
	this.prix_dachat = prix_dachat;
	this.date_de_creation = date_de_creation;
	this.date_de_modification = date_de_modification;
	this.unite_de_mesure = unite_de_mesure;
}
public gisement getGisement() {
	return gisement;
}
public void setGisement(gisement gisement) {
	this.gisement = gisement;
}
public table_dachat() {
	
}

}
