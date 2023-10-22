package com.project.Commande.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Formation {
    private Long id;

    private String description;
    private LocalDate dateDebut;  // Date de début de la formation
    private LocalDate dateFin;    // Date de fin de la formation
    private String lieu;
}
