package com.example.SmartFuel.rest.services.Distributeurservice;

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
public class Destributeurserviceimpl implements Destributeurservice {
  @Autowired
  private Distributeurrepository Distributeurrepository;
  @Autowired
  private  distributeur_gisementrepository  Dis;
  @Override
public List<distributeur> getallDistributeur(){
	    return    (List<distributeur>) Distributeurrepository.findAll();	
  }
@Override
  public distributeur getundistributeur( Integer id) {
	   return Distributeurrepository.findById(id).orElse(null);
  }
  @Override
  public String  createdistributeur( distributeur distributeur){
	    Optional<distributeur> existingDistributeur = Distributeurrepository.findByNom(distributeur.getNom());
	    if (existingDistributeur.isPresent()) {
	    	   throw new IllegalArgumentException("Le nom existe déjà");
 } 
	    	
	        Distributeurrepository.save(distributeur);
	  	  return "success";
	    
	    
  }
  @Override
  public String updatedistributeur( Integer id ,distributeur dis) {
	    Optional<distributeur> existingDistributeur = Distributeurrepository.findById(id);
	    
	    if (existingDistributeur.isPresent()) {
	        distributeur distributeurToUpdate = existingDistributeur.get();
	        if (!dis.getNom().equals(distributeurToUpdate.getNom()) && Distributeurrepository.findByNom(dis.getNom()).isPresent()) {
	            throw new IllegalArgumentException("Le nom du distributeur existe déjà");
	        }
	        distributeurToUpdate.setNom(dis.getNom());
	        Distributeurrepository.save(distributeurToUpdate);
	    } else {
	        throw new IllegalArgumentException("Le distributeur avec l'ID spécifié n'existe pas");
	    
	    }
	 	   return "success";
  }
  @Override
  public String deletedistributeur( Integer id){
	  distributeur  disToDelete = getundistributeur( id);
	  distributeur_gisement dis=Dis.findByiddistributeur(disToDelete);
	  dis.setiddistributeur(null);
	   Distributeurrepository .deleteById(id);
	   return "succed";
}
}
