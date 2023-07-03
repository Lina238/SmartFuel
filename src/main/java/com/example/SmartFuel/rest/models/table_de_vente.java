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
@Table(name="table_de_vente ")
public class table_de_vente {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
Integer id ;
Integer compteur_actuel;
Integer compteur_final;
Double quantite;
Double prix_unitaire;
@ManyToOne
@JsonBackReference("distributeur-gisement-vente")
@JoinColumn(name = "id_gisement_distributeur")   
distributeur_gisement id_gisement_distributeur;
@CreationTimestamp
@Column(name = "date_de_creation")
LocalDateTime date_de_creation;
@UpdateTimestamp
@Column(name = "date_de_modification")
LocalDateTime date_de_modification;
@ManyToOne
@JsonBackReference 
@JoinColumn(name = "user_opperation")
chef user_opperation;
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public Integer getCompteur_actuel() {
	return compteur_actuel;
}
public void setCompteur_actuel(Integer compteur_actuel) {
	this.compteur_actuel = compteur_actuel;
}
public Integer getCompteur_final() {
	return compteur_final;
}
public void setCompteur_final(Integer compteur_final) {
	this.compteur_final = compteur_final;
}
public Double getQuantite() {
	return quantite;
}
public void setQuantite(Double quantite) {
	this.quantite = quantite;
}
public Double getPrix_unitaire() {
	return prix_unitaire;
}
public void setPrix_unitaire(Double prix_unitaire) {
	this.prix_unitaire = prix_unitaire;
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


public chef getUser_opperation() {
	return user_opperation;
}
public void setUser_opperation(chef user_opperation) {
	this.user_opperation = user_opperation;
}
public table_de_vente() {

}
public distributeur_gisement getId_gisement_distributeur() {
	return id_gisement_distributeur;
}
public void setId_gisement_distributeur(distributeur_gisement id_gisement_distributeur) {
	this.id_gisement_distributeur = id_gisement_distributeur;
}
public table_de_vente(Integer id, Integer compteur_actuel, Integer compteur_final, Double quantite,
		Double prix_unitaire, distributeur_gisement id_gisement_distributeur, LocalDateTime date_de_creation,
		LocalDateTime date_de_modification, chef user_opperation) {
	super();
	this.id = id;
	this.compteur_actuel = compteur_actuel;
	this.compteur_final = compteur_final;
	this.quantite = quantite;
	this.prix_unitaire = prix_unitaire;
	this.id_gisement_distributeur = id_gisement_distributeur;
	this.date_de_creation = date_de_creation;
	this.date_de_modification = date_de_modification;
	this.user_opperation = user_opperation;
}


}
