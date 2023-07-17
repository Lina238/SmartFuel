package com.example.SmartFuel.rest.services.SommeMontantParPeriodeServic;

import java.time.LocalDateTime;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import java.sql.Date;
import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.example.SmartFuel.rest.models.SommeMontantParPeriode;
import com.example.SmartFuel.rest.models.distributeur;
import com.example.SmartFuel.rest.models.distributeur_gisement;
import com.example.SmartFuel.rest.repository.SommeMontantParPeriodeRepository;
import com.example.SmartFuel.rest.repository.table_de_venterepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import org.springframework.data.domain.Sort;


@Service
public class SommeMontantParPeriodeService {
    @Autowired
    private final SommeMontantParPeriodeRepository sommeMontantParPeriodeRepository;
    private final EntityManager entityManager;
    private final table_de_venterepository tabv;
    
    @Autowired
    public SommeMontantParPeriodeService(SommeMontantParPeriodeRepository sommeMontantParPeriodeRepository, 
            EntityManager entityManager,table_de_venterepository tabv ) {
        this.sommeMontantParPeriodeRepository = sommeMontantParPeriodeRepository;
        this.entityManager = entityManager;
        this.tabv=tabv;
    }
    @Transactional
    public String calculerSommeMontantParPeriode() {
        sommeMontantParPeriodeRepository.deleteAll();
        entityManager.flush();
        entityManager.clear();

        List<Object[]> result = sommeMontantParPeriodeRepository.joinSommeMontantParPeriode();

        int numElementsToProcess = Math.min(result.size(), 10);

        for (int i = result.size() - numElementsToProcess; i < result.size(); i++) {
            Object[] row = result.get(i);
            Double sommeMontant = (Double) row[0];
            java.util.Date utilDate = (java.util.Date) row[1];

            // Décalage d'un jour pour la première et la dernière journée
            if (i == result.size() - numElementsToProcess) {
                utilDate = addDays(utilDate, 1); // Décalage d'un jour en arrière
            } else if (i == result.size() - 1) {
                utilDate = addDays(utilDate, 1); // Décalage d'un jour en avant
            }

            // Conversion de java.util.Date en java.sql.Date
            Date periode = new Date(utilDate.getTime());

            SommeMontantParPeriode sommeMontantParPeriode = sommeMontantParPeriodeRepository.findByPeriode(periode);

            if (sommeMontantParPeriode == null) {
                sommeMontantParPeriode = new SommeMontantParPeriode();
                sommeMontantParPeriode.setPeriode(periode);
                sommeMontantParPeriode.setSommeMontant(sommeMontant);
            } else {
                sommeMontantParPeriode.setSommeMontant(sommeMontant);
            }

            sommeMontantParPeriodeRepository.save(sommeMontantParPeriode);
        }

        return "succed";
    }

    // Méthode utilitaire pour ajouter ou soustraire des jours à une date
    private java.util.Date addDays(java.util.Date date, int days) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.DATE, days);
        return cal.getTime();
    }
    public List<SommeMontantParPeriode> getallSommeMontantParPeriode() {
    	  return  ( List<SommeMontantParPeriode>)        sommeMontantParPeriodeRepository .findAll();   
    }

    }


