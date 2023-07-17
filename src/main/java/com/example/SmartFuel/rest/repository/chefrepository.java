package com.example.SmartFuel.rest.repository;
import java.util.Optional;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartFuel.rest.models.chef;
@Repository
public interface chefrepository extends  CrudRepository<chef,Integer> {
    Optional<chef> findByNom(String nom);
}
