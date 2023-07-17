package com.example.SmartFuel.rest.repository;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.SmartFuel.rest.models.table_de_vente;
import com.example.SmartFuel.rest.models.SommeMontantParPeriode;

import java.awt.print.Pageable;
import java.security.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.sql.Date;
@Repository
public interface SommeMontantParPeriodeRepository extends JpaRepository<SommeMontantParPeriode, Long> {
	SommeMontantParPeriode findByPeriode(Date periode);
	
	@Query(value = "SELECT SUM(t.montant) AS sommeMontant, DATE(t.date_de_creation) AS periode FROM table_de_vente t GROUP BY DATE(t.date_de_creation)")
	List<Object[]> joinSommeMontantParPeriode();

}
