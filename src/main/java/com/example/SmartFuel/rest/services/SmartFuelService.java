package com.example.SmartFuel.rest.services;
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
import com.example.SmartFuel.rest.models.role;
import com.example.SmartFuel.rest.models.chef;
import com.example.SmartFuel.rest.models.table_dachat;
import com.example.SmartFuel.rest.models.table_de_vente;
import com.example.SmartFuel.rest.models.type_gisement;
import com.example.SmartFuel.rest.repository.Distributeurrepository;
import com.example.SmartFuel.rest.repository.Rolerepository;
import com.example.SmartFuel.rest.repository.SmartFuelRepository;
import com.example.SmartFuel.rest.repository.distributeur_gisementrepository;
import com.example.SmartFuel.rest.repository.gisementrepository;
import com.example.SmartFuel.rest.repository.mouvement_gisementrepository;
import com.example.SmartFuel.rest.repository.table_dachatrepository;
import com.example.SmartFuel.rest.repository.table_de_venterepository;
@Service
public class SmartFuelService {
//gestion 	personnel
  @Autowired
  private SmartFuelRepository SmartFuelRepository;
   public List<Personnel> getallpersonnels(){
	   List<Personnel> per= new ArrayList <>();
	   SmartFuelRepository.findAll().forEach(per::add);
	   return per;
	   
   }
   public Optional<Personnel> getperso( Integer id) {
	   return SmartFuelRepository.findById(id);
	   
   }
   public void createpersonnel( Personnel perso){
	   Optional<Personnel> existingPersonnel = SmartFuelRepository.findByNom(perso.getNom());
	   if (existingPersonnel.isPresent()) {
	        System.out.println("La personne existe déjà : " + perso.getNom());
	    } else {
	        SmartFuelRepository.save(perso);
	    }
	   
   }
   public void updatepersonnel( Integer id ,Personnel perso) {
	   Optional<Personnel> existingPersonnel = SmartFuelRepository.findById(id);
	    if (existingPersonnel.isPresent()) {
	        Personnel personnelToUpdate = existingPersonnel.get();
	        if (!perso.getNom().equals(personnelToUpdate.getNom()) && SmartFuelRepository.findByNom(perso.getNom()).isPresent()) {
	            throw new IllegalArgumentException("Le nom de la personne existe déjà");
	        }
	        SmartFuelRepository.save(personnelToUpdate);
	    } else {
	        throw new IllegalArgumentException("La personne avec l'ID spécifié n'existe pas");
	    }
   }
   public void deletepersonnel( Integer id){
	   SmartFuelRepository.deleteById(id);
	   
 }
 //gestion 	chefs
   @Autowired
   private chefrepository chefrepository;
   public List<chef> getallchefs(){
 	   List<chef> per= new ArrayList <>();
 	  chefrepository.findAll().forEach(per::add);
 	   return per; 	   
    }
    public Optional<chef> getchef( Integer id) {
 	   return chefrepository.findById(id);   
    }
    public void createchef( chef perso){
    	  Optional<chef> existingChef = chefrepository.findByNom(perso.getNom());
    	    if (existingChef.isPresent()) {
    	        throw new IllegalStateException("Le chef avec le même nom existe déjà");
    	    }
    	    chefrepository.save(perso);
    }
    public void  updatechef( Integer id, chef perso) {
    	   Optional<chef> existingChef = chefrepository.findById(id);
    	    if (existingChef.isPresent()) {
    	        chef chefToUpdate = existingChef.get();
    	        if (!perso.getNom().equals(chefToUpdate.getNom()) && chefrepository.findByNom(perso.getNom()).isPresent()) {
    	            throw new IllegalArgumentException("Le nom du chef existe déjà");
    	        }
    	        chefrepository.save(chefToUpdate);
    	    } else {
    	        throw new IllegalArgumentException("Le chef avec l'ID spécifié n'existe pas");
    	    }
    }
    public void deletechef( Integer id){
    	chefrepository.deleteById(id);	   
  }
  //gestion 	type_gisement
    @Autowired
    private Type_gisementrepository  Type_gisementrepository ;
    public List<type_gisement> getalltype_gisement(){
  	   List<type_gisement> per= new ArrayList <>();
  	 Type_gisementrepository.findAll().forEach(per::add);
  	   return per;
     }
     public Optional<type_gisement> gettype_gisement( Integer id) {
  	   return Type_gisementrepository.findById(id);
  
     }
     public void createtype_gisement( type_gisement gis){
    	    Optional<type_gisement> existingType = Type_gisementrepository.findByType(gis.getType());
    	    if (existingType.isPresent()) {
    	        throw new IllegalArgumentException("Le type de gisement existe déjà");
    	    }
    	    Type_gisementrepository.save(gis);
     }
     public void  updatetype_gisement( Integer id, type_gisement  perso) {
    	    Optional<type_gisement> existingType = Type_gisementrepository.findByType(perso.getType());
    	    if (existingType.isPresent() && !existingType.get().getId().equals(perso.getId())) {
    	        throw new IllegalStateException("Le type de gisement avec le même type existe déjà");
    	    }   	    
    	    Type_gisementrepository.save(perso); 	   
     }
     public void deletetype_gisement( Integer id){
     	chefrepository.deleteById(id);
   }
   //gestion role 
   @Autowired
   private Rolerepository Rolerepository;
 public List<role> getallroles(){
	   List<role> rol= new ArrayList <>();
	   Rolerepository.findAll().forEach(rol::add);
	   return rol;
	   
   }
   public Optional<role> getunrole( Integer id) {
	   return Rolerepository.findById(id);
	   
   }
   public void createrole( role role){
	    Optional<role> existingRole = Rolerepository . findByTyperole(role.getRole_type());
	    if (existingRole.isPresent()) {
	        throw new IllegalArgumentException("Le rôle existe déjà");
	    }
	   Rolerepository.save(role);
   }
   public void updaterole(Integer id, role updatedRole) {
	    Optional<role> existingRole = Rolerepository.findById(id);
	    Optional<role> roleWithSameType = Rolerepository.findByTyperole(updatedRole.getRole_type());
	    if (roleWithSameType.isPresent() && !roleWithSameType.get().getId().equals(existingRole.get().getId())) {
	    } else {
	        Rolerepository.save(updatedRole);
	    }
	}

   public void deleterole( Integer id){
	   Rolerepository .deleteById(id);
	   
 }
   //gestion distributeur
   @Autowired
   private Distributeurrepository Distributeurrepository;
 public List<distributeur> getallDistributeur(){
	   List<distributeur> dis= new ArrayList <>();
	   Distributeurrepository.findAll().forEach(dis::add);
	   return dis;
	   
   }
   public Optional<distributeur> getundistributeur( Integer id) {
	   return Distributeurrepository.findById(id);
	   
   }
   public void createdistributeur( distributeur distributeur){
	    Optional<distributeur> existingDistributeur = Distributeurrepository.findByNom(distributeur.getNom());
	    if (existingDistributeur.isPresent()) {
	    } else {
	        Distributeurrepository.save(distributeur);
	    }   
   }
   public void updatedistributeur( Integer id ,distributeur dis) {
	    Optional<distributeur> existingDistributeur = Distributeurrepository.findById(id);
	    
	    if (existingDistributeur.isPresent()) {
	        distributeur distributeurToUpdate = existingDistributeur.get();
	        if (!dis.getNom().equals(distributeurToUpdate.getNom()) && Distributeurrepository.findByNom(dis.getNom()).isPresent()) {
	            throw new IllegalArgumentException("Le nom du distributeur existe déjà");
	        }
	        Distributeurrepository.save(distributeurToUpdate);
	    } else {
	        throw new IllegalArgumentException("Le distributeur avec l'ID spécifié n'existe pas");
	    }
   }
   public void deletedistributeur( Integer id){
	   Distributeurrepository .deleteById(id);
	   
 }
   //gestion distributeur_gisement
 
   @Autowired  
   private distributeur_gisementrepository  distributeur_gisementrepository ;
 public List<distributeur_gisement> getalldistributeur_gisement(){
	   List<distributeur_gisement> dis= new ArrayList <>();
	   distributeur_gisementrepository .findAll().forEach(dis::add);
	   return dis;
	   
   }
   public Optional<distributeur_gisement> getundistributeur_gisement( Integer id) {
	   return  distributeur_gisementrepository.findById(id);
	   
   }
   public void createdistributeur_gisement(distributeur_gisement gis){
	   distributeur_gisementrepository.save(gis);
	   
   }
   public void updatedistributeur_gisement( Integer id ,distributeur_gisement dis) {
	   distributeur_gisementrepository.save(dis);
	   
   }
   public void deletedistributeur_gisement( Integer id){
	   distributeur_gisementrepository.deleteById(id);	   
 }
   //gestion mouvement_gisement
   
   @Autowired  
   private mouvement_gisementrepository  mouvement_gisementrepository ;
 public List<mouvement_gisement> getallmouvement_gisement(){
	   List<mouvement_gisement> dis= new ArrayList <>();
	   mouvement_gisementrepository.findAll().forEach(dis::add);
	   return dis;	   
   }
   public Optional<mouvement_gisement> getunmouvement_gisement( Integer id) {
	   return  mouvement_gisementrepository.findById(id);	   
   }
   public void createmouvement_gisement(mouvement_gisement mouvement) {
	                mouvement_gisementrepository.save(mouvement);
	            }


   public void updatemouvement_gisement( Integer id ,mouvement_gisement dis) {
	   mouvement_gisementrepository.save(dis);	   
   }
   public void deletemouvement_gisement( Integer id){
	   mouvement_gisementrepository.deleteById(id);	   
 }  
 //gestion table_dachat
   
   @Autowired  
   private table_dachatrepository  table_dachatrepository ;
 public List<table_dachat> getalltable_dachat(){
	   List<table_dachat> dis= new ArrayList <>();
	   table_dachatrepository.findAll().forEach(dis::add);
	   return dis;	   
   }
   public Optional<table_dachat> getuntable_dachat( Integer id) {
	   return  table_dachatrepository.findById(id);	   
   }
   public void createtable_dachat(table_dachat tableDachat) {
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
	              mouvement_gisementrepository.save(mouvement);
	              gisementrepository.save(gis);
	       	   table_dachatrepository.save(tableDachat);	
	        } else {
	            System.out.println("La quantité à acheter dépasse la quantité libre ou la capacité totale du gisement.");
	        }
	    } else {
	        System.out.println("Gisement non trouvé.");
	    }
	}


   public void updatetable_dachat( Integer id ,table_dachat dis) {
	   table_dachatrepository.save(dis);	   
   }
   public void deletetable_dachat( Integer id){
	   table_dachatrepository.deleteById(id);	   
 }  
   //gestion table_de_vente
   
   @Autowired  
   private table_de_venterepository  table_de_venterepository ;
 public List<table_de_vente> getalltable_de_vente(){
	   List<table_de_vente> dis= new ArrayList <>();
	   table_de_venterepository.findAll().forEach(dis::add);
	   return dis;	   
   }
   public Optional<table_de_vente> getuntable_de_vente( Integer id) {
	   return  table_de_venterepository.findById(id);	   
   }
   public void createtable_de_vente(table_de_vente tab){	   
	   distributeur_gisement distributeurGisementt  = tab.getId_gisement_distributeur();
	   Optional<distributeur_gisement> distributeurGisementop = distributeur_gisementrepository.findById(distributeurGisementt.getId_gisement_distributeur());
	 	    distributeur_gisement distributeurGisement = distributeurGisementop.get();
	   	System.out.println(distributeurGisement.getIdgisement());
	 	   gisement gis=  distributeurGisement.getIdgisement();
       if (gis.getQuantite_actuelle() >= tab.getQuantite()) {
           if ((gis.getQuantite_actuelle() - tab.getQuantite())*0.1 <= gis.getSeuil()) {
               System.out.println("Quantité actuelle inférieure ou égale au seuil. Veuillez remplir le gisement.");
               
           }
           else {
           gis.setQuantite_actuelle(gis.getQuantite_actuelle() - tab.getQuantite());
           mouvement_gisement mouvement = new mouvement_gisement();
           mouvement.setQuantite(tab.getQuantite());
           mouvement.setTYPE(false);
               mouvement.setId_gisement_distributeur(distributeurGisement);
           gisementrepository.save(gis);
	   table_de_venterepository.save(tab);	   
           }
           }

       }
   public void updatetable_de_vente( Integer id ,table_de_vente dis) {
	   table_de_venterepository.save(dis);	   
   }
   public void deletetable_de_vente( Integer id){
	   table_dachatrepository.deleteById(id);	   
 }     
//gestion gisement
	@Autowired
private gisementrepository  gisementrepository ;
public List<gisement> getallgisement(){
	   List<gisement> dis= new ArrayList <>();
	   gisementrepository.findAll().forEach(dis::add);
	   return dis;	   
}
public Optional<gisement> getungisement( Integer id) {
	   return  gisementrepository.findById(id);	   
}
public void creategisement(gisement gis){
	Double seuil = (0.1 * gis.getCapacite_totale());
	gis.setSeuil(seuil);
    if (gis.getQuantite_actuelle()*0.1 <= seuil) {
        System.out.println("Quantité actuelle inférieure ou égale au seuil. Veuillez remplir le gisement.");
    }
	gisementrepository.save(gis);	   
}
public void updategisement(Integer id, gisement dis) {
            gisementrepository.save(dis);
            System.out.println("Gisement mis à jour avec succès.");
          
}


public void deletegisement( Integer id){
	gisementrepository.deleteById(id);	   
}  
}
