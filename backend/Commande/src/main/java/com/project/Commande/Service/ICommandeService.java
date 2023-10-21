package com.project.Commande.Service;

import com.project.Commande.entities.Commande;
import org.springframework.data.domain.Page;
import com.project.Commande.DTO.CommandeDTO;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ICommandeService {
    Commande AddCommande(Commande c);
    Commande UpdateCommande(Commande updatedCommande);


    ResponseEntity<String> deleteCommandeByIdIfEnAttente(Long id);

    List<Commande> getCommandesByUserId(Long userId);


    List<Commande> getCommandes();

    CommandeDTO getCommande(Long id);
}
