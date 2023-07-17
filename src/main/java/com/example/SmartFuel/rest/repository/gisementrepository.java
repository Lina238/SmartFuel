package com.example.SmartFuel.rest.repository;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartFuel.rest.models.gisement;

@Repository
public interface gisementrepository extends  CrudRepository<gisement,Integer>{
	 
}
