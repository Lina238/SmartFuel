package com.example.SmartFuel.rest.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartFuel.rest.models.table_dachat;
@Repository
public interface table_dachatrepository  extends CrudRepository<table_dachat,Integer>{

}
