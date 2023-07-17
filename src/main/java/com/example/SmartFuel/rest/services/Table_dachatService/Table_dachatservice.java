package com.example.SmartFuel.rest.services.Table_dachatService;
import java.util.List;
import java.util.Optional;
import com.example.SmartFuel.rest.models.table_dachat;

public interface Table_dachatservice {
public List<table_dachat> getalltable_dachat();
  table_dachat getuntable_dachat( Integer id) ;
  public String createtable_dachat(table_dachat tableDachat) ;
  public String updatetable_dachat( Integer id ,table_dachat dis);
  public String deletetable_dachat( Integer id);
}
