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
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;
@Entity
@Table(name="distributeur_gisement")
public class distributeur_gisement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer 	id_gisement_distributeur;
	   @NotNull
	    @NotEmpty
	@OneToOne
	@JoinColumn(name = "iddistributeur")   
	distributeur iddistributeur;

	   @NotNull
	    @NotEmpty
	    @OneToOne
	@JoinColumn(name = "idgisement")   
	gisement idgisement;
	   @JsonManagedReference("distributeur-gisement-vente")
	   @OneToMany(mappedBy = "id_gisement_distributeur")
	   private List<table_de_vente> table_de_vente;

	@JsonManagedReference("table-dachat-distributeur-gisement")
	@OneToMany(mappedBy="id_gisement_distributeur")
	List <table_dachat> table_dachat;	
	public distributeur_gisement(Integer id_gisement_distributeur, distributeur iddistributeur, gisement idgisement,
			List<com.example.SmartFuel.rest.models.table_de_vente> table_de_vente,
			List<com.example.SmartFuel.rest.models.table_dachat> table_dachat) {
		super();
		this.id_gisement_distributeur = id_gisement_distributeur;
		this.iddistributeur = iddistributeur;
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
	
	public distributeur getiddistributeur() {
		return iddistributeur;
	}
	public void setiddistributeur(distributeur iddistributeur) {
		this.iddistributeur = iddistributeur;
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
