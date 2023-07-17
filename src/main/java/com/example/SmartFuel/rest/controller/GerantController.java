package com.example.SmartFuel.rest.controller;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.Hidden;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.SmartFuel.rest.models.Personnel;
import com.example.SmartFuel.rest.models.SommeMontantParPeriode;
import com.example.SmartFuel.rest.models.chef;
import com.example.SmartFuel.rest.models.distributeur;
import com.example.SmartFuel.rest.models.distributeur_gisement;
import com.example.SmartFuel.rest.models.gisement;
import com.example.SmartFuel.rest.models.mouvement_gisement;
import com.example.SmartFuel.rest.models.table_dachat;
import com.example.SmartFuel.rest.models.table_de_vente;
import com.example.SmartFuel.rest.models.type_gisement;
import  com.example.SmartFuel.rest.repository.SmartFuelRepository;
import com.example.SmartFuel.rest.services.Chefservice.Chefrequest;
import com.example.SmartFuel.rest.services.Chefservice.Chefservice;
import com.example.SmartFuel.rest.services.Chefservice.Chefserviceimpl;
import com.example.SmartFuel.rest.services.Distributeur_gisementService.Distributeur_gisementserviceimpl;
import com.example.SmartFuel.rest.services.Distributeurservice.Destributeurserviceimpl;
import com.example.SmartFuel.rest.services.Gisementservice.Gisementserviceimpl;
import com.example.SmartFuel.rest.services.Mouvement_gisementservice.Mouvement_gisementimpl;

import com.example.SmartFuel.rest.services.Personnels.Personnelserviceimpl;
import com.example.SmartFuel.rest.services.SommeMontantParPeriodeServic.SommeMontantParPeriodeService;
import com.example.SmartFuel.rest.services.Table_dachatService.Table_dachatserviceimpl;
import com.example.SmartFuel.rest.services.Table_de_venteservice.Table_de_venteserviceimpl;
import com.example.SmartFuel.rest.services.Typegisementservice.Typegisementimpl;

import java.util.List;

import javax.validation.Valid;
import org.springframework.validation.annotation.Validated;
@Validated
@RestController
@RequestMapping("/api/v1/mangement")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")

public class GerantController {
	  @Autowired  
	  private SommeMontantParPeriodeService s;
	   private final Chefserviceimpl chefservice;
	    private final Personnelserviceimpl smartFuelservice;
       private final Destributeurserviceimpl disservicevice;
       private final Mouvement_gisementimpl mouvement_gisementimpl;
       private final Gisementserviceimpl   gisementservice;
       private final    Typegisementimpl type_gisementservice;
       private final   Table_de_venteserviceimpl table_de_venteservice;
       private final  Distributeur_gisementserviceimpl distributeur_gisementservice;
       private final Table_dachatserviceimpl  table_dachatservice;
       public GerantController(Chefserviceimpl chefservice, Personnelserviceimpl smartFuelservice,
				Destributeurserviceimpl disservicevice, Mouvement_gisementimpl mouvement_gisementimpl,
				Gisementserviceimpl gisementservice, Typegisementimpl type_gisementservice,
				Table_de_venteserviceimpl table_de_venteservice,
				Distributeur_gisementserviceimpl distributeur_gisementservice,
				Table_dachatserviceimpl table_dachatservice) {
			super();
			this.chefservice = chefservice;
			this.smartFuelservice = smartFuelservice;
			this.disservicevice = disservicevice;
			this.mouvement_gisementimpl = mouvement_gisementimpl;
			this.gisementservice = gisementservice;
			this.type_gisementservice = type_gisementservice;
			this.table_de_venteservice = table_de_venteservice;
			this.distributeur_gisementservice = distributeur_gisementservice;
			this.table_dachatservice = table_dachatservice;
		}

       
////gestion des distributeur:
	 @GetMapping("/Distributeur")	
	@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
	 public ResponseEntity<List<distributeur>> getallDistributeur() {
List<distributeur> dis =disservicevice .getallDistributeur() ;
  return new ResponseEntity<>(dis, HttpStatus.OK);
}
	 @GetMapping("/Distributeur/{id}")
	@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")

public ResponseEntity<distributeur> getundistributeur(@PathVariable Integer id) {
	distributeur dis =disservicevice.getundistributeur(id);
    return new ResponseEntity<>(dis, HttpStatus.OK);
}
@PostMapping("/Distributeur")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> createdistributeur( @RequestBody distributeur  dis) {
	String ch=disservicevice.createdistributeur(dis);
	return new ResponseEntity<>(ch, HttpStatus.CREATED);
}
@PutMapping("/Distributeur/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> updatedistributeur(@PathVariable Integer id,@RequestBody  distributeur  dis) {

	
	String status=disservicevice.updatedistributeur(id,dis);
    return new ResponseEntity<>(status, HttpStatus.OK);
}
@DeleteMapping("/Distributeur/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> deletedistributeur(@PathVariable Integer id ) {
	String status=disservicevice.deletedistributeur(id);
	  return new ResponseEntity<>(status, HttpStatus.OK);
}
////////////////////////////////////////////
////gestion des distributeur_gisement:
@GetMapping("/Distributeur_gisement")	
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<List<distributeur_gisement>> getalldistributeur_gisement() {
	List<distributeur_gisement> dis =distributeur_gisementservice .getalldistributeur_gisement() ;
	  return new ResponseEntity<>(dis, HttpStatus.OK);
}

@GetMapping("/Distributeur_gisement/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<distributeur_gisement> getundistributeur_gisement(@PathVariable Integer id) {
	distributeur_gisement dis=distributeur_gisementservice.getundistributeur_gisement(id);
	 return new ResponseEntity<>(dis, HttpStatus.OK);
}
@PostMapping("/Distributeur_gisement")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> createdistributeur_gisement( @RequestBody distributeur_gisement  gis) {
	String dis=distributeur_gisementservice.createdistributeur_gisement(gis);
	return new ResponseEntity<>(dis, HttpStatus.CREATED);
}
@PutMapping("/Distributeur_gisement/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> updatedistributeur_gisement(@PathVariable Integer id,@RequestBody  distributeur_gisement   gis) {
	String status=distributeur_gisementservice.updatedistributeur_gisement(id,gis);
	 return new ResponseEntity<>(status, HttpStatus.OK);
	}
@DeleteMapping("/Distributeur_gisement/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> deletedistributeur_gisement(@PathVariable Integer id ) {
	String status=distributeur_gisementservice.deletedistributeur_gisement(id);
	  return new ResponseEntity<>(status, HttpStatus.OK);
	}
////////////////////////////////////////////
////gestion des mouvement_gisement:
@GetMapping("/Mouvement_gisement")	
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<List<mouvement_gisement>> getallmouvement_gisement() {

	List<mouvement_gisement> m=mouvement_gisementimpl.getallmouvement_gisement() ;
	return new ResponseEntity<>(m, HttpStatus.OK);
}
@GetMapping("/Mouvement_gisement/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<mouvement_gisement>  getunmouvement_gisement(@PathVariable Integer id) {
	mouvement_gisement dis= mouvement_gisementimpl.getunmouvement_gisement(id);
	  return new ResponseEntity<>(dis, HttpStatus.OK);
}
@PostMapping("/Mouvement_gisement")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> createmouvement_gisement( @RequestBody mouvement_gisement  gis) {
 String ch =mouvement_gisementimpl.createmouvement_gisement(gis);
 return new ResponseEntity<>(ch, HttpStatus.CREATED);
}
//@PutMapping("/Mouvement_gisement/{id}")
//public void updatemouvement_gisement(@PathVariable Integer id,@RequestBody  mouvement_gisement   gis) {
//smartFuelservicevice.updatemouvement_gisement(id,gis);
//}
//@DeleteMapping("/Mouvement_gisement/{id}")
//public void deletemouvement_gisement(@PathVariable Integer id ) {
//smartFuelservicevice.deletemouvement_gisement(id);
//}
////////////////////////////////////////////
////gestion des table_dachat:
 @GetMapping("/Table_dachat")	
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
 public ResponseEntity<List<table_dachat>> getalltable_dachat() {
	 List<table_dachat> dis =table_dachatservice.getalltable_dachat() ;
	  return new ResponseEntity<>(dis, HttpStatus.OK);
 }
@GetMapping("/Table_dachat/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<table_dachat> getuntable_dachat(@PathVariable Integer id) {
	 table_dachat dis =table_dachatservice.getuntable_dachat(id);
	  return new ResponseEntity<>(dis, HttpStatus.OK);
	 }
@PostMapping("/Table_dachat")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String>  createtable_dachat( @RequestBody table_dachat  gis) {
	 String ch =table_dachatservice.createtable_dachat(gis);
		return new ResponseEntity<>(ch, HttpStatus.CREATED);
}
@PutMapping("/Table_dachat/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> updatetable_dachat(@PathVariable Integer id,@RequestBody  table_dachat   gis) {
	String status =table_dachatservice.updatetable_dachat(id,gis);
	return new ResponseEntity<>(status, HttpStatus.OK);
	}
@DeleteMapping("/Table_dachat/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> deletetable_dachat(@PathVariable Integer id ) {
	String status =table_dachatservice.deletetable_dachat(id);
	  return new ResponseEntity<>(status, HttpStatus.OK);
	}
////////////////////////////////////////////
////gestion des table_dachat:
	 @GetMapping("/Table_de_vente")	
	@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
	
public ResponseEntity<List<table_de_vente>>  getalltable_de_vente() {
		 List<table_de_vente> dis= table_de_venteservice .getalltable_de_vente() ;
		  return new ResponseEntity<>(dis, HttpStatus.OK);
	 }
 @GetMapping("/Table_de_vente/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
 ResponseEntity<table_de_vente> getuntable_de_vente(@PathVariable Integer id) {
	 table_de_vente dis = table_de_venteservice .getuntable_de_vente(id);
	    return new ResponseEntity<>(dis, HttpStatus.OK);
 }
@PostMapping("/Table_de_vente")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> createtable_de_vente( @RequestBody table_de_vente  gis) {
	String ch=table_de_venteservice .createtable_de_vente(gis);
	return new ResponseEntity<>(ch, HttpStatus.CREATED);
}
@PutMapping("/Table_de_vente/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> updatetable_de_vente(@PathVariable Integer id,@RequestBody  table_de_vente   gis) {
	String status=table_de_venteservice.updatetable_de_vente(id,gis);
    return new ResponseEntity<>(status, HttpStatus.OK);
}
@DeleteMapping("/Table_de_vente/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String>  deletetable_de_vente(@PathVariable Integer id ) {
	String status=table_de_venteservice.deletetable_de_vente(id);
	  return new ResponseEntity<>(status, HttpStatus.OK);
}
//
////////////////////////////////////////////
////gestion des type_gisement:
 @GetMapping("/Type_gisement")	
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
 public ResponseEntity<List<type_gisement>> getalltype_gisement() {
	 List<type_gisement> dis=type_gisementservice.getalltype_gisement() ;
	  return new ResponseEntity<>(dis, HttpStatus.OK);
}
 @GetMapping("/Type_gisement/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
 public ResponseEntity<type_gisement> gettype_gisement(@PathVariable Integer id) {
 type_gisement dis=type_gisementservice.gettype_gisement(id);
 return new ResponseEntity<>(dis, HttpStatus.OK);
 }
@PostMapping("/Type_gisement")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> createtype_gisement( @RequestBody type_gisement  gis) {
	String  dis=type_gisementservice.createtype_gisement(gis);
		return new ResponseEntity<>(dis, HttpStatus.CREATED);
}
@PutMapping("/Type_gisement/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> updatetype_gisement(@PathVariable Integer id,@RequestBody  type_gisement  gis) {
	String  dis=type_gisementservice.updatetype_gisement(id,gis);
	return new ResponseEntity<>(dis, HttpStatus.OK);
}
@DeleteMapping("/Type_gisement/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> deletetype_gisement(@PathVariable Integer id ) {
	String  dis=type_gisementservice.deletetype_gisement(id);
	return new ResponseEntity<>(dis, HttpStatus.OK);
}
////////////////////////////////////////////
////gestion des gisement:
 @GetMapping("/Gisement")	
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
 public ResponseEntity<List<gisement>> getallgisement() {
	 List<gisement> dis =gisementservice .getallgisement() ;
	 return new ResponseEntity<>(dis, HttpStatus.OK);
}
 @GetMapping("/Gisement/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
 public ResponseEntity<gisement> getgisement(@PathVariable Integer id) {
gisement dis= gisementservice.getungisement(id);
return new ResponseEntity<>(dis, HttpStatus.OK);
}
@PostMapping("/Gisement")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> creategisement( @RequestBody gisement  gis) {
	String ch=gisementservice.creategisement(gis);
	return new ResponseEntity<>(ch, HttpStatus.CREATED);
}
@PutMapping("/Gisement/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String>  updategisement(@PathVariable Integer id,@RequestBody  gisement  gis) {
	String status=gisementservice.updategisement(id,gis);
	 return new ResponseEntity<>(status, HttpStatus.OK);
}
@DeleteMapping("/Gisement/{id}")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<String> deletegisement(@PathVariable Integer id ) {
	String status=gisementservice.deletegisement(id);
	  return new ResponseEntity<>(status, HttpStatus.OK);
}
@GetMapping("/Dashb")
@PreAuthorize("hasAnyRole('ADMIN', 'MANGEMENT')")
public ResponseEntity<List< SommeMontantParPeriode >>  getallSommeMontantParPeriode(){
	List< SommeMontantParPeriode > status=s.getallSommeMontantParPeriode();
	 return new ResponseEntity<>(status, HttpStatus.OK);
}
	}

