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
import javax.validation.constraints.NotEmpty;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;
@Entity
@Table(name="table_dachat")
public class table_dachat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
Integer id;
	   @NotNull
	    @NotEmpty
Double quantite;
	   @NotNull
	    @NotEmpty
Double prix_dachat;
@ManyToOne
@JsonBackReference("table-dachat-distributeur-gisement")
@JoinColumn(name = "id_gisement_distributeur")
distributeur_gisement id_gisement_distributeur;
@CreationTimestamp
@JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
@Column(name = "date_de_creation")
LocalDateTime date_de_creation;
@UpdateTimestamp
@Column(name = "date_de_modification")
@JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
LocalDateTime date_de_modification;
@NotNull
@NotEmpty
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
public table_dachat(Integer id, distributeur_gisement id_gisement_distributeur, Double quantite, Double prix_dachat,
		LocalDateTime date_de_creation, LocalDateTime date_de_modification, String unite_de_mesure) {
	super();
	this.id = id;
	this.id_gisement_distributeur = id_gisement_distributeur;
	this.quantite = quantite;
	this.prix_dachat = prix_dachat;
	this.date_de_creation = date_de_creation;
	this.date_de_modification = date_de_modification;
	this.unite_de_mesure = unite_de_mesure;
}
public distributeur_gisement getId_gisement_distributeur() {
	return id_gisement_distributeur;
}
public void setId_gisement_distributeur(distributeur_gisement id_gisement_distributeur) {
	this.id_gisement_distributeur = id_gisement_distributeur;
}
public table_dachat() {
}
}
