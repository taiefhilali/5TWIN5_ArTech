package com.project.Commande.Service;

import com.project.Commande.Enum.EtatCommande;
import com.project.Commande.Repository.CommandeRepository;
import com.project.Commande.entities.Commande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandeServiceImpl implements ICommandeService {

    @Autowired
    CommandeRepository commandeRepository;
    @Override
    public Commande AddCommande(Commande c) {
        return commandeRepository.save(c);
    }

    @Override
    public Commande UpdateCommande(Commande updatedCommande) {
        Commande existingCommande = commandeRepository.findById(updatedCommande.getId())
                .orElseThrow(() -> new RuntimeException("Commande non trouvée"));

        // Mettre à jour les champs nécessaires
        existingCommande.setEtat(updatedCommande.getEtat());
        existingCommande.setIdProduit(updatedCommande.getIdProduit());
        existingCommande.setIdUser(updatedCommande.getIdUser());

        // Sauvegarder la commande mise à jour
        return commandeRepository.save(existingCommande);
    }

    @Override
    public ResponseEntity<String> deleteCommandeByIdIfEnAttente(Long id) {
        Commande commande = commandeRepository.findById(id).orElse(null);
        if (commande != null && commande.getEtat() == EtatCommande.EnAttente) {
            commandeRepository.delete(commande);
            return ResponseEntity.ok()
                    .header("Content-Type", "application/json")
                    .body("{\"message\": \"La commande a été supprimée avec succès.\"}");
        } else if (commande != null && commande.getEtat() == EtatCommande.Confirme) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .header("Content-Type", "application/json")
                    .body("{\"message\": \"Impossible de supprimer une commande confirmée.\"}");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .header("Content-Type", "application/json")
                    .body("{\"message\": \"La commande n'a pas été trouvée.\"}");
        }
    }

    @Override
    public List<Commande> getCommandesByUserId(Long userId) {
        return commandeRepository.findCommandesByUserId(userId);
    }
    @Override
    public List<Commande> getCommandes() {
        return commandeRepository.findAll();
    }

}