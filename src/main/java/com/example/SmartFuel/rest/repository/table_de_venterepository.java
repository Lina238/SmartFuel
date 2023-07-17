package com.example.SmartFuel.rest.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartFuel.rest.models.table_de_vente;

import java.util.List;

import javax.transaction.Transactional;

@Repository
public interface table_de_venterepository extends CrudRepository<table_de_vente, Integer> {
	
}
