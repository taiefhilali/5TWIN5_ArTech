package com.project.Commande.DTO;

import com.project.Commande.entities.Commande;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.Entity;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CommandeDTO {
    Commande commande;
    Formation formation;
}
