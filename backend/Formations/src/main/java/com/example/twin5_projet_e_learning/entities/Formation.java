package com.example.twin5_projet_e_learning.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Formation implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    private String description;
    private LocalDate dateDebut;  // Date de début de la formation
    private LocalDate dateFin;    // Date de fin de la formation
    private String lieu;


    public Formation() {
        super();
    }

    public Formation(String description, LocalDate dateDebut, LocalDate dateFin, String lieu) {
        super();
        this.description = description;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.lieu = lieu;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(LocalDate dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDate getDateFin() {
        return dateFin;
    }

    public void setDateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
    }

    public String getLieu() {
        return lieu;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }
}
