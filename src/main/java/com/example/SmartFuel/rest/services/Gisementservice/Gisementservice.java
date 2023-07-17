package com.example.SmartFuel.rest.services.Gisementservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.SmartFuel.rest.models.gisement;

public interface Gisementservice {
	public List<gisement> getallgisement();

	public gisement getungisement( Integer id);
	public String creategisement(gisement gis);

	public String updategisement(Integer id, gisement dis) ;

	public String deletegisement( Integer id);
}
