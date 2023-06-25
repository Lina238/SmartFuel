package com.example.SmartFuel.rest;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
	   SmartFuelRepository.save(perso);
	   
   }
   public void updatepersonnel( Integer id ,Personnel perso) {
	   SmartFuelRepository.save(perso);
	   
   }
   public void deletepersonnel( Integer id){
	   SmartFuelRepository.deleteById(id);
	   
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
	   Rolerepository.save(role);
	   
   }
   public void updaterole( Integer id ,role role) {
	   Rolerepository.save(role);
	   
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
	   Distributeurrepository.save(distributeur);
	   
   }
   public void updatedistributeur( Integer id ,distributeur dis) {
	   Distributeurrepository.save(dis);
	   
   }
   public void deletedistributeur( Integer id){
	   Distributeurrepository .deleteById(id);
	   
 }
   //gestion type_gisement
   @Autowired  
   private Type_gisementrepository Type_gisementrepository;
 public List<type_gisement> getalltype_gisement(){
	   List<type_gisement> dis= new ArrayList <>();
	   Type_gisementrepository.findAll().forEach(dis::add);
	   return dis;
	   
   }
   public Optional<type_gisement> getuntype_gisement( Integer id) {
	   return Type_gisementrepository.findById(id);
	   
   }
   public void createtype_gisement( type_gisement gis){
	   Type_gisementrepository.save(gis);
	   
   }
   public void updatetype_gisement( Integer id ,type_gisement dis) {
	   Type_gisementrepository.save(dis);
	   
   }
   public void deletetype_gisement( Integer id){
	   Type_gisementrepository.deleteById(id);	   
 }
}
