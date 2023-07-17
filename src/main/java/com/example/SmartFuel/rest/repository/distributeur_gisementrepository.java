package com.example.SmartFuel.rest.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SmartFuel.rest.models.distributeur;
import com.example.SmartFuel.rest.models.distributeur_gisement;
import com.example.SmartFuel.rest.models.gisement;
@Repository
public interface distributeur_gisementrepository extends CrudRepository<distributeur_gisement, Integer> {
	 distributeur_gisement findByidgisement(gisement idgisement);
	 distributeur_gisement findByiddistributeur(distributeur  iddistributeur);
	distributeur_gisement findByIddistributeurIdAndIdgisementId(Integer idDistributeur, Integer idGisement);
	distributeur_gisement findByIddistributeurId(Integer idDistributeur);
	distributeur_gisement findByIdgisementId(Integer idGisement);

}
