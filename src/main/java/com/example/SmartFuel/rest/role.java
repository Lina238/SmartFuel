package com.example.SmartFuel.rest;

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
	String type_role;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getRole_type() {
		return type_role;
	}
	public void setRole_type(String type_role) {
		this.type_role = type_role;
	}
	public role(Integer id, String type_role) {
		super();
		this.id = id;
		this.type_role = type_role;
	}
	public role() {
	}

}
