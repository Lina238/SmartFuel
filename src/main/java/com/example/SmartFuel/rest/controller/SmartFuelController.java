package com.example.SmartFuel.rest.controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.SmartFuel.rest.models.Personnel;
import com.example.SmartFuel.rest.models.chef;
import com.example.SmartFuel.rest.models.distributeur;
import com.example.SmartFuel.rest.models.distributeur_gisement;
import com.example.SmartFuel.rest.models.gisement;
import com.example.SmartFuel.rest.models.mouvement_gisement;
import com.example.SmartFuel.rest.models.role;
import com.example.SmartFuel.rest.models.table_dachat;
import com.example.SmartFuel.rest.models.table_de_vente;
import com.example.SmartFuel.rest.models.type_gisement;
import com.example.SmartFuel.rest.services.SmartFuelService;
@RestController
public class SmartFuelController {	
//gestion des personnels :	
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
public void deletepersonnel(@PathVariable Integer id ) {
	SmartFuelService.deletepersonnel(id);
}
//////////////////////////////////////////
//gestion des chefs :	
@RequestMapping("/Chefs")	
public List< chef> getallchefs(){
	
	return SmartFuelService.getallchefs() ;
}
@RequestMapping("/Chefs/{id}")
public Optional<chef> getchef(@PathVariable Integer id) {
	return SmartFuelService.getchef(id);
	
}
@RequestMapping(method=RequestMethod.POST,value="/Chefs")
public void createchef( @RequestBody chef  perso) {
	SmartFuelService.createchef(perso);
	
}
@RequestMapping(method=RequestMethod.PUT,value="/Chefs/{id}")
public void updatechef(@PathVariable Integer id,@RequestBody chef perso ) {
	SmartFuelService. updatechef(id,perso);
}
@RequestMapping(method=RequestMethod.DELETE,value="/Chefs/{id}")
public void deletechef(@PathVariable Integer id ) {
	SmartFuelService.deletechef(id);
}
//////////////////////////////////////////
///
//gestion des roles :
@RequestMapping("/Roles")	
public List< role> getallroles(){
return SmartFuelService .getallroles() ;
}
@RequestMapping("/Roles/{id}")
public Optional<role> getunrole(@PathVariable Integer id) {
return SmartFuelService.getunrole(id);

}
@RequestMapping(method=RequestMethod.POST,value="/Roles")
public void createrole( @RequestBody role  role) {
SmartFuelService.createrole(role);

}
@RequestMapping(method=RequestMethod.PUT,value="/Roles/{id}")
public void updaterole(@PathVariable Integer id,@RequestBody role role ) {
SmartFuelService.updaterole(id,role);
}
@RequestMapping(method=RequestMethod.DELETE,value="/Roles/{id}")
public void deleterole(@PathVariable Integer id ) {
SmartFuelService.deleterole(id);
}
//////////////////////////////////////////
//gestion des distributeur:
@RequestMapping("/Distributeur")	
public List< distributeur> getallDistributeur() {
return SmartFuelService .getallDistributeur() ;
}
@RequestMapping("/Distributeur/{id}")
public Optional<distributeur> getundistributeur(@PathVariable Integer id) {
return SmartFuelService.getundistributeur(id);

}
@RequestMapping(method=RequestMethod.POST,value="/Distributeur")
public void createdistributeur( @RequestBody distributeur  dis) {
SmartFuelService.createdistributeur(dis);

}
@RequestMapping(method=RequestMethod.PUT,value="/Distributeur/{id}")
public void updaterole(@PathVariable Integer id,@RequestBody  distributeur  dis) {
SmartFuelService.updatedistributeur(id,dis);
}
@RequestMapping(method=RequestMethod.DELETE,value="/Distributeur/{id}")
public void deletedistributeur(@PathVariable Integer id ) {
SmartFuelService.deletedistributeur(id);
}
//////////////////////////////////////////
//gestion des distributeur_gisement:
@RequestMapping("/Distributeur_gisement")	
public  List<distributeur_gisement> getalldistributeur_gisement() {
return SmartFuelService .getalldistributeur_gisement() ;
}
@RequestMapping("/Distributeur_gisement/{id}")
public Optional<distributeur_gisement> getundistributeur_gisement(@PathVariable Integer id) {
return SmartFuelService.getundistributeur_gisement(id);
}
@RequestMapping(method=RequestMethod.POST,value="/Distributeur_gisement")
public void createdistributeur_gisement( @RequestBody distributeur_gisement  gis) {
SmartFuelService.createdistributeur_gisement(gis);
}
@RequestMapping(method=RequestMethod.PUT,value="/Distributeur_gisement/{id}")
public void updatedistributeur_gisement(@PathVariable Integer id,@RequestBody  distributeur_gisement   gis) {
SmartFuelService.updatedistributeur_gisement(id,gis);
}
@RequestMapping(method=RequestMethod.DELETE,value="/Distributeur_gisement/{id}")
public void deletedistributeur_gisement(@PathVariable Integer id ) {
SmartFuelService.deletedistributeur_gisement(id);
}
//////////////////////////////////////////
//gestion des mouvement_gisement:
@RequestMapping("/Mouvement_gisement")	
public  List<mouvement_gisement> getallmouvement_gisement() {
return SmartFuelService .getallmouvement_gisement() ;
}
@RequestMapping("/Mouvement_gisement/{id}")
public Optional<mouvement_gisement> getunmouvement_gisement(@PathVariable Integer id) {
return SmartFuelService.getunmouvement_gisement(id);
}
@RequestMapping(method=RequestMethod.POST,value="/Mouvement_gisement")
public void createmouvement_gisement( @RequestBody mouvement_gisement  gis) {
SmartFuelService.createmouvement_gisement(gis);
}
@RequestMapping(method=RequestMethod.PUT,value="/Mouvement_gisement/{id}")
public void updatemouvement_gisement(@PathVariable Integer id,@RequestBody  mouvement_gisement   gis) {
SmartFuelService.updatemouvement_gisement(id,gis);
}
@RequestMapping(method=RequestMethod.DELETE,value="/Mouvement_gisement/{id}")
public void deletemouvement_gisement(@PathVariable Integer id ) {
SmartFuelService.deletemouvement_gisement(id);
}
//////////////////////////////////////////
//gestion des table_dachat:
@RequestMapping("/Table_dachat")	
public  List<table_dachat> getalltable_dachat() {
return SmartFuelService .getalltable_dachat() ;
}
@RequestMapping("/Table_dachat/{id}")
public Optional<table_dachat> getuntable_dachat(@PathVariable Integer id) {
return SmartFuelService.getuntable_dachat(id);
}
@RequestMapping(method=RequestMethod.POST,value="/Table_dachat")
public void createtable_dachat( @RequestBody table_dachat  gis) {
SmartFuelService.createtable_dachat(gis);
}
@RequestMapping(method=RequestMethod.PUT,value="/Table_dachat/{id}")
public void updatetable_dachat(@PathVariable Integer id,@RequestBody  table_dachat   gis) {
SmartFuelService.updatetable_dachat(id,gis);
}
@RequestMapping(method=RequestMethod.DELETE,value="/Table_dachat/{id}")
public void deletetable_dachat(@PathVariable Integer id ) {
SmartFuelService.deletetable_dachat(id);
}
//////////////////////////////////////////
//gestion des table_dachat:
@RequestMapping("/Table_de_vente")	
public  List<table_de_vente> getalltable_de_vente() {
return SmartFuelService .getalltable_de_vente() ;
}
@RequestMapping("/Table_de_vente/{id}")
public Optional<table_de_vente> getuntable_de_vente(@PathVariable Integer id) {
return SmartFuelService.getuntable_de_vente(id);
}
@RequestMapping(method=RequestMethod.POST,value="/Table_de_vente")
public void createtable_de_vente( @RequestBody table_de_vente  gis) {
SmartFuelService.createtable_de_vente(gis);
}
@RequestMapping(method=RequestMethod.PUT,value="/Table_de_vente/{id}")
public void updatetable_de_vente(@PathVariable Integer id,@RequestBody  table_de_vente   gis) {
SmartFuelService.updatetable_de_vente(id,gis);
}
@RequestMapping(method=RequestMethod.DELETE,value="/Table_de_vente/{id}")
public void deletetable_de_vente(@PathVariable Integer id ) {
SmartFuelService.deletetable_de_vente(id);
}

//////////////////////////////////////////
//gestion des type_gisement:
@RequestMapping("/Type_gisement")	
public  List<type_gisement> getalltype_gisement() {
return SmartFuelService .getalltype_gisement() ;
}
@RequestMapping("/Type_gisement/{id}")
public Optional<type_gisement> gettype_gisement(@PathVariable Integer id) {
return SmartFuelService.gettype_gisement(id);
}
@RequestMapping(method=RequestMethod.POST,value="/Type_gisement")
public void createtype_gisement( @RequestBody type_gisement  gis) {
SmartFuelService.createtype_gisement(gis);
}
@RequestMapping(method=RequestMethod.PUT,value="/Type_gisement/{id}")
public void updatetype_gisement(@PathVariable Integer id,@RequestBody  type_gisement  gis) {
SmartFuelService.updatetype_gisement(id,gis);
}
@RequestMapping(method=RequestMethod.DELETE,value="/Type_gisement/{id}")
public void deletetype_gisement(@PathVariable Integer id ) {
SmartFuelService.deletetype_gisement(id);
}
//////////////////////////////////////////
//gestion des gisement:
@RequestMapping("/Gisement")	
public  List<gisement> getallgisement() {
return SmartFuelService .getallgisement() ;
}
@RequestMapping("/Gisement/{id}")
public Optional<gisement> getgisement(@PathVariable Integer id) {
return SmartFuelService.getungisement(id);
}
@RequestMapping(method=RequestMethod.POST,value="/Gisement")
public void creategisement( @RequestBody gisement  gis) {
SmartFuelService.creategisement(gis);
}
@RequestMapping(method=RequestMethod.PUT,value="/Gisement/{id}")
public void updategisement(@PathVariable Integer id,@RequestBody  gisement  gis) {
SmartFuelService.updategisement(id,gis);
}
@RequestMapping(method=RequestMethod.DELETE,value="/Gisement/{id}")
public void deletegisement(@PathVariable Integer id ) {
SmartFuelService.deletegisement(id);
}
}
