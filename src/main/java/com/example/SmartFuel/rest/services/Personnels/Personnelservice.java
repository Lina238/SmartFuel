package com.example.SmartFuel.rest.services.Personnels;

import java.util.List;
import java.util.Optional;

import com.example.SmartFuel.rest.models.Personnel;

public interface Personnelservice {
	List<Personnel> getallpersonnels() ;
	Personnel getperso( Integer id);
	String deletepersonnel( Integer id);
	String updatepersonnel(Integer id, Personnelrequest perso);
	
}
