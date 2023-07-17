package com.example.SmartFuel.rest.services.Mouvement_gisementservice;

import com.example.SmartFuel.rest.models.mouvement_gisement;

import java.util.List;
import java.util.Optional;
public interface Mouvement_gisement {

public List<mouvement_gisement> getallmouvement_gisement();
  public mouvement_gisement getunmouvement_gisement( Integer id);
  public String createmouvement_gisement(mouvement_gisement mouvement);
//  public String updatemouvement_gisement( Integer id ,mouvement_gisement dis);
//  public String deletemouvement_gisement( Integer id);

}
