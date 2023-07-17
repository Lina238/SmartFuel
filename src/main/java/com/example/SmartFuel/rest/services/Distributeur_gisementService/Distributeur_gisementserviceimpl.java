package com.example.SmartFuel.rest.services.Distributeur_gisementService;
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
public class Distributeur_gisementserviceimpl implements Distributeur_gisementservice{
  @Autowired  
  private distributeur_gisementrepository  distributeur_gisementrepository ;
  @Override
public List<distributeur_gisement> getalldistributeur_gisement(){
	  return  ( List<distributeur_gisement>)   distributeur_gisementrepository .findAll();   
  }
@Override
public distributeur_gisement getundistributeur_gisement( Integer id) {
	   return  distributeur_gisementrepository.findById(id).orElse(null);     	   
  }
  @Override
  public String  createdistributeur_gisement(distributeur_gisement gis){
	 
		    try {
		      Integer idDistributeur = gis.getiddistributeur().getId(); 
		        Integer idGisement = gis.getIdgisement().getId();

		        distributeur_gisement existingRelation = distributeur_gisementrepository.findByIddistributeurId(idDistributeur);
		        distributeur_gisement existingdis = distributeur_gisementrepository.findByIdgisementId( idGisement);
		        distributeur_gisement existingg= distributeur_gisementrepository.findByIddistributeurIdAndIdgisementId(idDistributeur, idGisement);
		       
		        if (existingRelation != null || existingdis != null || existingg != null) {
		            return "La relation entre le distributeur et le gisement existe déjà.";
		        }

		        distributeur_gisementrepository.save(gis);
		        return "Ajout avec succès";
		    } catch (Exception e) {
		        return "Erreur avec : " + e.getMessage();
		    }
		}
  @Override
  public String updatedistributeur_gisement( Integer id ,distributeur_gisement dis) {
  	   Optional<distributeur_gisement> existingdistributeur_gisement = distributeur_gisementrepository.findById(id);
  	    if (existingdistributeur_gisement.isPresent()) {
  	    	distributeur_gisement distributeur_gisementToUpdate = existingdistributeur_gisement.get();
  	    	distributeur_gisementToUpdate.setId_gisement(dis.getIdgisement());
	    	distributeur_gisementToUpdate.setiddistributeur(dis.getiddistributeur());
	    	System.out.println(dis.getiddistributeur());
  	    	distributeur_gisementrepository.save(distributeur_gisementToUpdate);
  	    }  
  	    return "succed";
  }
  @Override
  public String deletedistributeur_gisement( Integer id){
	   distributeur_gisement ToDelete = getundistributeur_gisement( id);
        ToDelete.setId_gisement(null);
        ToDelete.setiddistributeur(null);
        ToDelete.setTable_dachat(null);
        ToDelete.setTable_de_vente(null);
        distributeur_gisementrepository.save(ToDelete);	
	   distributeur_gisementrepository.deleteById(id);	
	   return "succed";
}
}
