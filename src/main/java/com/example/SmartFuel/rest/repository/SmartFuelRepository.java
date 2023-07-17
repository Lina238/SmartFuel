package com.example.SmartFuel.rest.repository;
import java.io.Serializable;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartFuel.rest.models.Personnel;

//cafeinecash 
// la table dis_gis : 
//quantite=compteur_finale-compteur_actuel
 //motant=le_prix_de_vente *quantite
//react table component(material ui)
//chakra for table
//SQL TRANSACTION 
@Repository
public interface SmartFuelRepository extends  JpaRepository<Personnel, Integer>   {
	Optional<Personnel> findByUsername(String username);

}
