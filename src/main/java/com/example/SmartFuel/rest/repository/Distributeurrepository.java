package com.example.SmartFuel.rest.repository;
import java.util.Optional;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartFuel.rest.models.distributeur;
@Repository
public interface Distributeurrepository extends  CrudRepository<distributeur,Integer> {
	Optional<distributeur> findByNom(String nom);
}
