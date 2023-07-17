package com.example.SmartFuel.rest.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartFuel.rest.models.mouvement_gisement;
@Repository
public interface mouvement_gisementrepository extends CrudRepository<mouvement_gisement,Integer> {

}
