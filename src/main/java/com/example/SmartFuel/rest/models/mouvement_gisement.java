package com.example.SmartFuel.rest.models;

import java.time.LocalDateTime;

import javax.persistence.Column;
import  javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;
@Entity
@Table(name="mouvement_gisement")
public class mouvement_gisement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	@OneToOne
	@JoinColumn(name = "id_gisement_distributeur")   
	distributeur_gisement id_gisement_distributeur;
	Boolean TYPE;
	@CreationTimestamp
	@Column(name = "date_de_creation")
	@JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
	LocalDateTime date_de_creation;
	@UpdateTimestamp
	@Column(name = "date_de_modification")
	@JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
	LocalDateTime date_de_modification;
	Double quantite;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public distributeur_gisement  getId_gisement_distributeur() {
		return id_gisement_distributeur;
	}
	public void setId_gisement_distributeur(distributeur_gisement  id_gisement_distributeur) {
		this.id_gisement_distributeur = id_gisement_distributeur;
	}
	public Boolean getTYPE() {
		return TYPE;
	}
	public void setTYPE(Boolean tYPE) {
		TYPE = tYPE;
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
	public Double getQuantite() {
		return quantite;
	}
	public void setQuantite(Double quantite) {
		this.quantite = quantite;
	}
	public mouvement_gisement(Integer id, distributeur_gisement  id_gisement_distributeur, Boolean tYPE,
			LocalDateTime date_de_creation, LocalDateTime date_de_modification, Double quantite) {
		super();
		this.id = id;
		this.id_gisement_distributeur = id_gisement_distributeur;
		TYPE = tYPE;
		this.date_de_creation = date_de_creation;
		this.date_de_modification = date_de_modification;
		this.quantite = quantite;
	}
	public mouvement_gisement() {
	
	}
	
}
