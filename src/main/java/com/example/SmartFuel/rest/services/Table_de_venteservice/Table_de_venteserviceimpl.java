package com.example.SmartFuel.rest.services.Table_de_venteservice;
import java.time.LocalDateTime;
import java.util.*;
import com.example.SmartFuel.rest.repository.chefrepository;
import com.example.SmartFuel.rest.repository.Type_gisementrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.SmartFuel.rest.models.Personnel;
import com.example.SmartFuel.rest.models.SommeMontantParPeriode;
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
import com.example.SmartFuel.rest.repository.SommeMontantParPeriodeRepository;
import com.example.SmartFuel.rest.repository.distributeur_gisementrepository;
import com.example.SmartFuel.rest.repository.gisementrepository;
import com.example.SmartFuel.rest.repository.mouvement_gisementrepository;
import com.example.SmartFuel.rest.repository.table_dachatrepository;
import com.example.SmartFuel.rest.repository.table_de_venterepository;
import com.example.SmartFuel.rest.services.SommeMontantParPeriodeServic.SommeMontantParPeriodeService;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
@Service
@RequiredArgsConstructor
public class Table_de_venteserviceimpl implements Table_de_venteservice {
  @Autowired  
  private table_de_venterepository  table_de_venterepository ;
  @Autowired  
  private distributeur_gisementrepository  distributeur_gisementrepository ;
	@Autowired
private gisementrepository  gisementrepository ;
	  @Autowired  
	  private table_dachatrepository  table_dachatrepository ;
	  @Autowired  
	  private mouvement_gisementrepository mouvement_gisementrepository;
	  @Autowired  
	  private SommeMontantParPeriodeService s;
	  @Autowired  
	  private SommeMontantParPeriodeRepository sommeMontantParPeriodeRepository ;
	  @Override
public List<table_de_vente> getalltable_de_vente(){

	 return ( List<table_de_vente>)   table_de_venterepository.findAll();  
  }
@Override
  public table_de_vente  getuntable_de_vente( Integer id) {
	   return  table_de_venterepository.findById(id).orElse(null);	     
  }
  @Override
  public String createtable_de_vente(table_de_vente tab){	   	
	  String res="";
	   distributeur_gisement distributeurGisementt  = tab.getId_gisement_distributeur();
	   Optional<distributeur_gisement> distributeurGisementop = distributeur_gisementrepository.findById(distributeurGisementt.getId_gisement_distributeur());
	 	    distributeur_gisement distributeurGisement = distributeurGisementop.get();
	   	System.out.println(distributeurGisement.getIdgisement());
	 	   gisement gis=  distributeurGisement.getIdgisement();
	 	   if (gis.getQuantite_actuelle() >= tab.getQuantite()) {
          if ((gis.getQuantite_actuelle() - tab.getQuantite()) <= gis.getSeuil()) {
            res= "Quantité actuelle inférieure ou égale au seuil. Veuillez remplir le gisement.";
            gis.setQuantite_actuelle(gis.getQuantite_actuelle() - tab.getQuantite());
            mouvement_gisement mouvement = new mouvement_gisement();
           gis.setEspace_libre(gis.getCapacite_totale()-gis.getQuantite_actuelle());
            mouvement.setQuantite(tab.getQuantite());
            mouvement.setTYPE(false);
            tab.setDate_de_creation(LocalDateTime.now());
            tab.setDate_de_modification(LocalDateTime.now());
                mouvement.setId_gisement_distributeur(distributeurGisement);
                mouvement_gisementrepository.save(mouvement);
            gisementrepository.save(gis);
  	   Double montant=tab.getQuantite()*tab.getPrix_unitaire();
  	    tab.setMontant(montant);
  	   table_de_venterepository.save(tab);	  
  	 s.calculerSommeMontantParPeriode();
          }
          else {
          gis.setQuantite_actuelle(gis.getQuantite_actuelle() - tab.getQuantite());
          mouvement_gisement mouvement = new mouvement_gisement();
          mouvement.setQuantite(tab.getQuantite());
          mouvement.setTYPE(false);
              mouvement.setId_gisement_distributeur(distributeurGisement);
       	   Double montant=tab.getQuantite()*tab.getPrix_unitaire();
    	   tab.setMontant(montant);
          gisementrepository.save(gis);
	   table_de_venterepository.save(tab);	   
		  s.calculerSommeMontantParPeriode();
	      res="succed";
          }
	 	   } else {
        	res="quantité insuffisante";  
          }
	 	   return res;
         }
  @Override
  public String updatetable_de_vente( Integer id ,table_de_vente dis) {	
		Optional<table_de_vente> existinggis  =    table_de_venterepository.findById(id);
	    if (existinggis.isPresent()) {
	       table_de_vente gisToUpdate =  existinggis .get();
	       gisToUpdate.setId_gisement_distributeur(dis.getId_gisement_distributeur());
	       gisToUpdate.setCompteur_actuel(dis.getCompteur_actuel());
	       gisToUpdate.setCompteur_final(dis.getCompteur_final());
	       gisToUpdate.setPrix_unitaire(dis.getPrix_unitaire());
	       gisToUpdate.setQuantite(dis.getQuantite());
	       gisToUpdate.setUser_opperation(dis.getUser_opperation());
		   Double montant=gisToUpdate.getQuantite()*gisToUpdate.getPrix_unitaire();
		   gisToUpdate.setMontant(montant);
	       table_de_venterepository.save(gisToUpdate);	s.calculerSommeMontantParPeriode();
	 	  s.calculerSommeMontantParPeriode();
	    }else {
	            throw new IllegalArgumentException("Le chef avec l'ID spécifié n'existe pas");
	        }
	    return "succed";
  }
  @Override
  public String deletetable_de_vente( Integer id){
	  table_de_vente vente=getuntable_de_vente(id);
	  vente.setId_gisement_distributeur(null);
	  vente.setUser_opperation(null);
	  table_de_venterepository.save(vente);
	  table_de_venterepository.deleteById(id);
	  s.calculerSommeMontantParPeriode();

	  return "succed";
}     
}
