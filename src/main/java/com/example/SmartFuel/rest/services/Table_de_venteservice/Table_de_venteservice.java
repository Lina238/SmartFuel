package com.example.SmartFuel.rest.services.Table_de_venteservice;
import java.util.*;
import com.example.SmartFuel.rest.models.table_de_vente;


public interface Table_de_venteservice {
public List<table_de_vente> getalltable_de_vente();
  public table_de_vente getuntable_de_vente( Integer id) ;
  public String createtable_de_vente(table_de_vente tab);
  public String updatetable_de_vente( Integer id ,table_de_vente dis) ;
  public String deletetable_de_vente( Integer id);
}
