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
//gestion des type_gisement:
@RequestMapping("/Typegisement")	
public  List<type_gisement> getalltype_gisement() {
return SmartFuelService .getalltype_gisement() ;
}
@RequestMapping("/Typegisement/{id}")
public Optional<type_gisement> getuntype_gisement(@PathVariable Integer id) {
return SmartFuelService.getuntype_gisement(id);

}
@RequestMapping(method=RequestMethod.POST,value="/Typegisement")
public void createtype_gisement( @RequestBody type_gisement  gis) {
SmartFuelService.createtype_gisement(gis);

}
@RequestMapping(method=RequestMethod.PUT,value="/Typegisement/{id}")
public void updatetype_gisement(@PathVariable Integer id,@RequestBody  type_gisement   gis) {
SmartFuelService.updatetype_gisement(id,gis);
}
@RequestMapping(method=RequestMethod.DELETE,value="/Typegisement/{id}")
public void deletetype_gisement(@PathVariable Integer id ) {
SmartFuelService.deletetype_gisement(id);
}
}
