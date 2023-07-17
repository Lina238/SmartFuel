package com.example.SmartFuel.rest.services.Typegisementservice;
import java.util.List;
import java.util.Optional;
import com.example.SmartFuel.rest.models.type_gisement;


public interface Typegisement  {

	  public List<type_gisement> getalltype_gisement();
	   public type_gisement gettype_gisement( Integer id) ;
	   public String createtype_gisement( type_gisement gis);
	   public String  updatetype_gisement( Integer id, type_gisement  perso) ;
	   public String deletetype_gisement( Integer id);

}
