package com.example.SmartFuel.rest.services.Distributeur_gisementService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.SmartFuel.rest.models.distributeur_gisement;

public interface Distributeur_gisementservice {
	  public List<distributeur_gisement> getalldistributeur_gisement();
	    public  distributeur_gisement getundistributeur_gisement( Integer id);
	    public String createdistributeur_gisement(distributeur_gisement gis);
	    public String updatedistributeur_gisement( Integer id ,distributeur_gisement dis) ;
	    public String deletedistributeur_gisement( Integer id);
}
