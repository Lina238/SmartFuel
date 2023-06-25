package com.example.SmartFuel.rest;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="type_gisement ")
public class type_gisement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	String type;
	Double prix_de_vente ;
	public type_gisement(Integer id, String type, Double prix_de_vente) {
		super();
		this.id = id;
		this.type = type;
		this.prix_de_vente = prix_de_vente;
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
