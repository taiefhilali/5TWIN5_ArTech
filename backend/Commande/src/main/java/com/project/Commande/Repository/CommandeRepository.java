package com.project.Commande.Repository;

import com.project.Commande.entities.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommandeRepository extends JpaRepository<Commande, Long>, JpaSpecificationExecutor<Commande> {

    Optional<Commande> findById(long id);

    @Query("SELECT c FROM Commande c WHERE c.idUser = :userId")
    List<Commande> findCommandesByUserId(@Param("userId") Long userId);
}
