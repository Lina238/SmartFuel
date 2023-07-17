package com.example.SmartFuel.rest.services.Typegisementservice;
import java.time.LocalDateTime;


import java.util.*;
import com.example.SmartFuel.rest.repository.chefrepository;
import com.example.SmartFuel.rest.repository.Type_gisementrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SmartFuel.rest.models.Personnel;
import com.example.SmartFuel.rest.models.distributeur;
import com.example.SmartFuel.rest.models.distributeur_gisement;
import com.example.SmartFuel.rest.models.gisement;
import com.example.SmartFuel.rest.models.mouvement_gisement;
import com.example.SmartFuel.rest.models.chef;
import com.example.SmartFuel.rest.models.table_dachat;
import com.example.SmartFuel.rest.models.table_de_vente;
import com.example.SmartFuel.rest.models.type_gisement;
import com.example.SmartFuel.rest.repository.Distributeurrepository;
import com.example.SmartFuel.rest.repository.SmartFuelRepository;
import com.example.SmartFuel.rest.repository.distributeur_gisementrepository;
import com.example.SmartFuel.rest.repository.gisementrepository;
import com.example.SmartFuel.rest.repository.mouvement_gisementrepository;
import com.example.SmartFuel.rest.repository.table_dachatrepository;
import com.example.SmartFuel.rest.repository.table_de_venterepository;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
@Service
@RequiredArgsConstructor
public class Typegisementimpl implements Typegisement {
  //gestion 	type_gisement
  @Autowired
  private Type_gisementrepository  Type_gisementrepository ;
  @Override
  public List<type_gisement> getalltype_gisement(){
	    
	    return 	(List<type_gisement>) Type_gisementrepository.findAll();
   }
  @Override
   public type_gisement gettype_gisement( Integer id) {
	   return Type_gisementrepository.findById(id).orElse(null);
   }
   @Override
   public String createtype_gisement( type_gisement gis){
  	    Optional<type_gisement> existingType = Type_gisementrepository.findByType(gis.getType());
  	    if (existingType.isPresent()) {
  	        throw new IllegalArgumentException("Le type de gisement existe déjà");
         	    }
  	    Type_gisementrepository.save(gis);
  	    return "succed";
   }
   @Override
   public String updatetype_gisement( Integer id, type_gisement  perso) {
  	    Optional<type_gisement> existingType = Type_gisementrepository.findByType(perso.getType());
  	    if (existingType.isPresent() && !existingType.get().getId().equals(perso.getId())) {
  	        throw new IllegalStateException("Le type de gisement avec le même type existe déjà");
  	    }   	    
  	    Type_gisementrepository.save(perso);
		return "succed"; 	   
   }
   @Override
   public String deletetype_gisement( Integer id){
	   Type_gisementrepository.deleteById(id);
	   return "succed";
 }
}
