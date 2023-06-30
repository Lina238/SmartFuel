package com.example.SmartFuel.rest.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="distributeur_gisement")
public class distributeur_gisement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer 	id_gisement_distributeur;
	@OneToOne
	@JoinColumn(name = "id_distributeur")   
	distributeur id_distributeur;
	@OneToOne
	@JoinColumn(name = "id_gisement")   
	gisement id_gisement;

	public distributeur_gisement(distributeur distributeur, gisement  id_gisement, Integer id_gisement_distributeur) {
		super();
		this.id_distributeur = distributeur;
		this.id_gisement = id_gisement;
		this.id_gisement_distributeur = id_gisement_distributeur;
	}
	public distributeur_gisement() {
	}
	
	public distributeur getId_distributeur() {
		return id_distributeur;
	}
	public void setId_distributeur(distributeur id_distributeur) {
		this.id_distributeur = id_distributeur;
	}
	public gisement  getId_gisement() {
		return id_gisement;
	}
	public void setId_gisement(gisement  id_gisement) {
		this.id_gisement = id_gisement;
	}
	public Integer getId_gisement_distributeur() {
		return id_gisement_distributeur;
	}
	public void setId_gisement_distributeur(Integer id_gisement_distributeur) {
		this.id_gisement_distributeur = id_gisement_distributeur;
	}
	
}
