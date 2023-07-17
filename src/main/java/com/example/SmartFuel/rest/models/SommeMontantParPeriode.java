package com.example.SmartFuel.rest.models;
import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "somme_montant_par_periode")
public class SommeMontantParPeriode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "somme_montant")
    private Double sommeMontant;

    @Column(name = "periode")
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    
   private Date periode;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getSommeMontant() {
		return sommeMontant;
	}

	public void setSommeMontant(Double sommeMontant) {
		this.sommeMontant = sommeMontant;
	}

	public Date getPeriode() {
		return periode;
	}

	public void setPeriode(Date periode) {
		this.periode= periode;
	}

	public SommeMontantParPeriode(Long id, Double sommeMontant, Date periode) {
		super();
		this.id = id;
		this.sommeMontant = sommeMontant;
		this.periode= periode;
	}
	public SommeMontantParPeriode(
			) {
	
	}

}
