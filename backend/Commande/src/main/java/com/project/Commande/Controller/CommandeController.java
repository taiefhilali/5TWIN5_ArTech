package com.project.Commande.Controller;

import com.project.Commande.DTO.CommandeDTO;
import com.project.Commande.Service.ICommandeService;
import com.project.Commande.entities.Commande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/commande")

public class CommandeController {
    @Autowired
    ICommandeService commandeService;
    @PostMapping("/add")
    public Commande addCommande(@RequestBody Commande commande){
        return commandeService.AddCommande(commande);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Commande> updateCommande(@PathVariable Long id, @RequestBody Commande updatedCommande) {
        updatedCommande.setId(id);
        Commande updated = commandeService.UpdateCommande(updatedCommande);
        return ResponseEntity.ok(updated);
    }


    @DeleteMapping("/delete/{id}")
    public void deleteCommandeIfEnAttente(@PathVariable Long id) {
        commandeService.deleteCommandeByIdIfEnAttente(id);
    }



    @GetMapping("/user/{userId}")
    public List<Commande> getCommandesByUserId(@PathVariable Long userId) {
        return commandeService.getCommandesByUserId(userId);
    }
    @GetMapping("/getall")
    public List<Commande> getCommandes() {
        return commandeService.getCommandes();
    }

    @GetMapping("/product/{Id}")
    public CommandeDTO getCommandesByProductId(@PathVariable("Id") Long id) {
        return commandeService.getCommande(id);
    }



}
