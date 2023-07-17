package com.example.SmartFuel.rest.services.Chefservice;

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
import com.example.SmartFuel.rest.services.Table_de_venteservice.Table_de_venteserviceimpl;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class Chefserviceimpl implements Chefservice{
	

  private final chefrepository chefrepository;

  private final table_de_venterepository  ttable_de_venterepository;

  private final  Table_de_venteserviceimpl  table_de_venteserviceimpl;
  @Autowired
public Chefserviceimpl(com.example.SmartFuel.rest.repository.chefrepository chefrepository,
		table_de_venterepository ttable_de_venterepository, Table_de_venteserviceimpl table_de_venteserviceimpl) {
	super();
	this.chefrepository = chefrepository;
	this.ttable_de_venterepository = ttable_de_venterepository;
	this.table_de_venteserviceimpl = table_de_venteserviceimpl;
}
@Override
  public List<chef> getallchefs(){
		
	   // Use smartFuelRepository instead of SmartFuelRepository
	    return    (List<chef>)  chefrepository.findAll();	   
	}
  @Override
   public chef getchef( Integer id) {
	   return chefrepository.findById(id).orElse(null);   
   }
   @Override
   public String  createchef( Chefrequest perso){
   	  Optional<chef> existingChef = chefrepository.findByNom(perso.getNom());
   	    if (existingChef.isPresent()) {
   	        throw new IllegalStateException("Le chef avec le même nom existe déjà");
   	    }
   	 chef che = new chef();
   	che.setNom(perso.getNom());
   	    chefrepository.save(che);
   	  return "success";
   }
   @Override
   public String  updatechef( Integer id, chef perso) {
   	   Optional<chef> existingChef = chefrepository.findById(id);
   	    if (existingChef.isPresent()) {
   	        chef chefToUpdate = existingChef.get();
   	        if (!perso.getNom().equals(chefToUpdate.getNom()) && chefrepository.findByNom(perso.getNom()).isPresent()) {
   	            throw new IllegalArgumentException("Le nom du chef existe déjà");
   	        }
   	     chefToUpdate.setNom(perso.getNom());
   	        chefrepository.save(chefToUpdate);
   	    } else {
   	        throw new IllegalArgumentException("Le chef avec l'ID spécifié n'existe pas");
   	    }
   	   return "success";
   }
   @Override
   public String deletechef( Integer id){
	   chef chefToDelete = getchef( id);
	List<table_de_vente> ventes=chefToDelete.getTable_de_vente();
	ttable_de_venterepository.deleteAll(ventes);
   	chefrepository.deleteById(id);	   
	   return "succed";
 }
}
