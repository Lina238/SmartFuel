package com.example.SmartFuel.rest;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class SmartFuelController {
	@Autowired
	private SmartFuelService SmartFuelService;
@RequestMapping("/Personnels")	
public List< Personnel> getallpersonnels(){
	
	return SmartFuelService.getallpersonnels() ;
}
@RequestMapping("/Personnels/{id}")
public Optional<Personnel> getperso(@PathVariable Integer id) {
	return SmartFuelService.getperso(id);
	
}
@RequestMapping(method=RequestMethod.POST,value="/Personnels")
public void createpersonnel( @RequestBody Personnel  perso) {
	SmartFuelService.createpersonnel(perso);
	
}
@RequestMapping(method=RequestMethod.PUT,value="/Personnels/{id}")
public void updatepersonnel(@PathVariable Integer id,@RequestBody Personnel perso ) {
	SmartFuelService.updatepersonnel(id,perso);
}
@RequestMapping(method=RequestMethod.DELETE,value="/Personnels/{id}")
public void updatepersonnel(@PathVariable Integer id ) {
	SmartFuelService.deletepersonnel(id);
}
}
