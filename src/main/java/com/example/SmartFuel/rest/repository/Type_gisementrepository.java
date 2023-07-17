package com.example.SmartFuel.rest.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartFuel.rest.models.type_gisement;
@Repository
public interface Type_gisementrepository extends  CrudRepository<type_gisement,Integer> {
	   Optional<type_gisement> findByType(String type);
}
