package com.example.SmartFuel.rest.services.Distributeurservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.SmartFuel.rest.models.distributeur;

public interface Destributeurservice {
	public List<distributeur> getallDistributeur();
	  public distributeur  getundistributeur( Integer id) ;
	  public String createdistributeur( distributeur distributeur);

	  public String updatedistributeur( Integer id ,distributeur dis);
	   public String deletedistributeur( Integer id);
}
