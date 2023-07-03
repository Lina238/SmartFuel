package com.example.SmartFuel.rest.repository;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.SmartFuel.rest.models.role;
public interface Rolerepository extends  CrudRepository<role,Integer>   {
	  Optional<role> findByTyperole(String typerole);
}
