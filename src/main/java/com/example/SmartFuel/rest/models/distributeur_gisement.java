package com.example.SmartFuel.rest.models;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
	@JoinColumn(name = "idgisement")   
	gisement idgisement;
    @OneToMany(mappedBy = "id_gisement_distributeur")
    @JsonManagedReference("distributeur-gisement-vente")
    private List<table_de_vente> table_de_vente;
	@OneToMany(mappedBy="id_gisement_distributeur")
	  @JsonManagedReference("distributeur-gisement-dachat")
	List <table_dachat> table_dachat;	
	public distributeur_gisement(Integer id_gisement_distributeur, distributeur id_distributeur, gisement idgisement,
			List<com.example.SmartFuel.rest.models.table_de_vente> table_de_vente,
			List<com.example.SmartFuel.rest.models.table_dachat> table_dachat) {
		super();
		this.id_gisement_distributeur = id_gisement_distributeur;
		this.id_distributeur = id_distributeur;
		this.idgisement = idgisement;
		this.table_de_vente = table_de_vente;
		this.table_dachat = table_dachat;
	}

	public List<table_dachat> getTable_dachat() {
		return table_dachat;
	}

	public void setTable_dachat(List<table_dachat> table_dachat) {
		this.table_dachat = table_dachat;
	}

	public void setIdgisement(gisement idgisement) {
		this.idgisement = idgisement;
	}

	public List<table_de_vente> getTable_de_vente() {
		return table_de_vente;
	}

	public void setTable_de_vente(List<table_de_vente> table_de_vente) {
		this.table_de_vente = table_de_vente;
	}

	public distributeur_gisement() {
	}
	
	public distributeur getId_distributeur() {
		return id_distributeur;
	}
	public void setId_distributeur(distributeur id_distributeur) {
		this.id_distributeur = id_distributeur;
	}
	public gisement  getIdgisement() {
		return idgisement;
	}
	public void setId_gisement(gisement  idgisement) {
		this.idgisement = idgisement;
	}
	public Integer getId_gisement_distributeur() {
		return id_gisement_distributeur;
	}
	public void setId_gisement_distributeur(Integer id_gisement_distributeur) {
		this.id_gisement_distributeur = id_gisement_distributeur;
	}
	
}
