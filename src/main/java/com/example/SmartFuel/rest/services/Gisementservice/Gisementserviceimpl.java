package com.example.SmartFuel.rest.services.Gisementservice;
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
import com.example.SmartFuel.rest.services.Distributeur_gisementService.Distributeur_gisementserviceimpl;
import com.example.SmartFuel.rest.services.Typegisementservice.Typegisementimpl;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
@Service
@RequiredArgsConstructor
public class Gisementserviceimpl implements Gisementservice {
	  @Autowired
	  private  distributeur_gisementrepository  Distributeurrepository;
	@Autowired
private gisementrepository  gisementrepository ;
	  @Override
public List<gisement> getallgisement(){

	   return ( List<gisement>)  gisementrepository.findAll();	   
}
@Override

public gisement getungisement( Integer id) {
	   return  gisementrepository.findById(id).orElse(null);      
}
@Override
public String  creategisement(gisement gis){
	Double seuil = (0.1 * gis.getCapacite_totale());
	gis.setSeuil(seuil);
    if (gis.getQuantite_actuelle()*0.1 <= seuil) {
        System.out.println("Quantité actuelle inférieure ou égale au seuil. Veuillez remplir le gisement.");
    }
    gis.setEspace_libre(gis.getCapacite_totale()-gis.getQuantite_actuelle());
	gisementrepository.save(gis);	   
 	  return "success";
}
@Override

public String updategisement(Integer id, gisement dis) {
	Optional<gisement> existinggis = gisementrepository.findById(id);
	    if (existinggis.isPresent()) {
	        gisement gisToUpdate =  existinggis .get();
	     
	        gisToUpdate.setCapacite_totale(dis.getCapacite_totale());
	        gisToUpdate.setNom(dis.getNom());
	        gisToUpdate.setQuantite_actuelle(dis.getQuantite_actuelle());
	        gisToUpdate.setSeuil(dis.getSeuil());
	        gisToUpdate.setType_gisement(dis.getType_gisement());	
	        gisToUpdate.setEspace_libre( gisToUpdate.getCapacite_totale()- gisToUpdate.getQuantite_actuelle());
            gisementrepository.save(gisToUpdate);
	        }else {
       throw new IllegalArgumentException(" l'ID spécifié n'existe pas");
   }
  return "success";
}
@Override
public String deletegisement( Integer id){
	   gisement gisementToDelete = getungisement( id);
	gisementToDelete.setType_gisement(null);
	gisementrepository.save(gisementToDelete);	
	distributeur_gisement dis=Distributeurrepository.findByidgisement(gisementToDelete);
	if(dis!=null) {
	dis.setIdgisement(null);
	}
	gisementrepository.deleteById(id);	   
	  return "succed";
}  
}
