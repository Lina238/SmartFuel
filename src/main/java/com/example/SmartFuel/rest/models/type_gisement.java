package com.example.SmartFuel.rest.models;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;

@Entity
@Table(name="type_gisement ")
public class type_gisement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	   @NotNull
	    @NotEmpty
	String type;
	   @NotNull
	    @NotEmpty
	Double prix_de_vente ;
	@OneToMany(mappedBy="type_gisement")

	@JsonBackReference("type")
	List <gisement> gisement;
	public type_gisement(Integer id, String type, Double prix_de_vente,List <gisement> gisement) {
		super();
		this.id = id;
		this.type = type;
		this.prix_de_vente = prix_de_vente;
		this.gisement=gisement;
	}
	
	public List<gisement> getGisement() {
		return gisement;
	}

	public void setGisement(List<gisement> gisement) {
		this.gisement = gisement;
	}

	public type_gisement() {

	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Double getPrix_de_vente() {
		return prix_de_vente;
	}
	public void setPrix_de_vente(Double prix_de_vente) {
		this.prix_de_vente = prix_de_vente;
	}
	
}
