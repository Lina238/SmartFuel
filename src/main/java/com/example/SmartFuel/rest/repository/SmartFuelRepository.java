package com.example.SmartFuel.rest.repository;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.SmartFuel.rest.models.Personnel;
//cafeinecash 
// la table dis_gis : 
//quantite=compteur_finale-compteur_actuel
 //motant=le_prix_de_vente *quantite
//react table component(material ui)
//chakra for table
//probleme auto incremental
//SQL TRANSACTION 
public interface SmartFuelRepository extends CrudRepository<Personnel,Integer>   {
	Optional<Personnel> findByNom(String nom);
}
