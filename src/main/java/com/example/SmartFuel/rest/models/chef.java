package com.example.SmartFuel.rest.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="chef")
public class chef {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	@OneToMany(mappedBy="chef")
	@JsonManagedReference
	List <Personnel> personnel;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	public chef(Integer id, List<Personnel> personnel) {
		super();
		this.id = id;
		this.personnel = personnel;
	}
	public List<Personnel> getPersonnel() {
		return personnel;
	}
	
	public void setPersonnel(List<Personnel> personnel) {
		this.personnel = personnel;
	}
	public chef() {

	}
	
}
