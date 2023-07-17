package com.example.SmartFuel.rest.services.Chefservice;

import java.util.List;
import java.util.Optional;

import com.example.SmartFuel.rest.models.chef;

public interface Chefservice {
      List<chef> getallchefs();
	chef getchef( Integer id);
   String  createchef( Chefrequest perso);
   public String updatechef( Integer id, chef perso);
   public String deletechef( Integer id);
}
