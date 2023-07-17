package com.example.SmartFuel.rest.services.Mouvement_gisementservice;
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
public class Mouvement_gisementimpl implements Mouvement_gisement {

  private final mouvement_gisementrepository  mouvement_gisementrepository ;
  @Autowired  
  public Mouvement_gisementimpl(mouvement_gisementrepository mouvement_gisementrepository) {
	super();
	this.mouvement_gisementrepository = mouvement_gisementrepository;
}
@Override
public List<mouvement_gisement> getallmouvement_gisement(){
	    return    ( List<mouvement_gisement> )  mouvement_gisementrepository.findAll();	  

  }
@Override
  public mouvement_gisement getunmouvement_gisement( Integer id) {
	   return  mouvement_gisementrepository.findById(id).orElse(null);    
  }
  @Override
  public String createmouvement_gisement(mouvement_gisement mouvement) {
	                mouvement_gisementrepository.save(mouvement);
	                return "succesed";
	            }

//  @Override
//  public String updatemouvement_gisement( Integer id ,mouvement_gisement dis) {
//	   mouvement_gisementrepository.save(dis);	   
//  }
//  @Override
//  public void deletemouvement_gisement( Integer id){
//	   mouvement_gisementrepository.deleteById(id);	   
//}  
}
