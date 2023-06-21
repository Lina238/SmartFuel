package com.example.SmartFuel.rest;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class SmartFuelService {
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
}
