package com.example.SmartFuel.rest.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="role")
public class role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	@Column(name = "type_role")
	String typerole;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getRole_type() {
		return typerole;
	}
	public void setRole_type(String type_role) {
		this.typerole = type_role;
	}
	public role(Integer id, String type_role) {
		super();
		this.id = id;
		this.typerole = type_role;
	}
	public role() {
	}

}
