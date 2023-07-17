package com.example.SmartFuel.rest.services.Table_dachatService;

import org.springframework.stereotype.Service;


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

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class Table_dachatserviceimpl implements Table_dachatservice {
  @Autowired  
  private table_dachatrepository  table_dachatrepository ;
	@Autowired
private gisementrepository  gisementrepository ;
	  @Autowired  
	  private mouvement_gisementrepository  mouvement_gisementrepository ;
  @Autowired  
  private distributeur_gisementrepository  distributeur_gisementrepository ;
  @Override
public List<table_dachat> getalltable_dachat(){
	 
return (  List<table_dachat> )  table_dachatrepository.findAll();
  }
@Override
  public table_dachat getuntable_dachat( Integer id) {
	   return  table_dachatrepository.findById(id).orElse(null);	   
  }
  @Override
  public String createtable_dachat(table_dachat tableDachat) {
	 String  res="";
 distributeur_gisement distributeurGisementt  = tableDachat.getId_gisement_distributeur();
 Optional<distributeur_gisement> distributeurGisementop = distributeur_gisementrepository.findById(distributeurGisementt.getId_gisement_distributeur());
	    distributeur_gisement distributeurGisement = distributeurGisementop.get();
 	System.out.println(distributeurGisement.getIdgisement());
	   gisement gis=  distributeurGisement.getIdgisement();
	    if (gis != null) {	    	
	        double quantiteAcheter = tableDachat.getQuantite();
	        double capaciteTotale = gis.getCapacite_totale();
	        double quantiteActuelle = gis.getQuantite_actuelle();
	        double quantiteLibre = capaciteTotale - quantiteActuelle;
	        if (quantiteAcheter <= quantiteLibre && quantiteAcheter < capaciteTotale) {
	            gis.setQuantite_actuelle(quantiteActuelle + quantiteAcheter);
	            mouvement_gisement mouvement = new mouvement_gisement();
	            mouvement.setQuantite(quantiteAcheter);
	            mouvement.setTYPE(true);
	            mouvement.setDate_de_creation(LocalDateTime.now()); 
	            mouvement.setDate_de_modification(LocalDateTime.now()); 
	              mouvement.setId_gisement_distributeur(distributeurGisement);
	              gis.setEspace_libre(gis.getCapacite_totale()-gis.getQuantite_actuelle());
	              mouvement_gisementrepository.save(mouvement);
	              gisementrepository.save(gis);
	       	   table_dachatrepository.save(tableDachat);	
	        } else {
	           res="La quantité à acheter dépasse la quantité libre ou la capacité totale du gisement.";
	        }
	    } else {
	       res="Gisement non trouvé.";
	    }
	    return res;
	}

  @Override
  public String updatetable_dachat( Integer id ,table_dachat dis) {
		Optional<table_dachat> existinggis  = table_dachatrepository.findById(id);
	    if (existinggis.isPresent()) {
	       table_dachat gisToUpdate =  existinggis .get();
	       gisToUpdate.setId_gisement_distributeur(dis.getId_gisement_distributeur());
	       gisToUpdate.setPrix_dachat(dis.getPrix_dachat());
	       gisToUpdate.setQuantite(dis.getQuantite());
	       gisToUpdate.setUnite_de_mesure(dis.getUnite_de_mesure());
	      
	   	table_dachatrepository.save(gisToUpdate);	
	        }else {
	            throw new IllegalArgumentException("Le chef avec l'ID spécifié n'existe pas");
	        }
	   
	   return "succed";
  }
  @Override
  public String deletetable_dachat( Integer id){
	  table_dachat achat = getuntable_dachat(id);
	   achat.setId_gisement_distributeur(null);
	   table_dachatrepository.save(achat);	
	   table_dachatrepository.deleteById(id);	
	   return "succed";
}  
}
