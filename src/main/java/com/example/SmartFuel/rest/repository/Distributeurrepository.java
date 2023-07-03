package com.example.SmartFuel.rest.repository;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import com.example.SmartFuel.rest.models.distributeur;
public interface Distributeurrepository extends  CrudRepository<distributeur,Integer> {
	Optional<distributeur> findByNom(String nom);
}
