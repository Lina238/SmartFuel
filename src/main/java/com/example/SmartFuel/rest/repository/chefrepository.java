package com.example.SmartFuel.rest.repository;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.SmartFuel.rest.models.chef;
public interface chefrepository extends  CrudRepository<chef,Integer> {
    Optional<chef> findByNom(String nom);
}
