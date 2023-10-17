package com.example.twin5_projet_e_learning.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;


@Entity
public class Cours implements Serializable {

    @Id
    @GeneratedValue
    private Long id;
    private String titre;
    private String description;
    private String instructeur;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private String lieu;

    public Cours() {
        super();
    }

    public Cours(String titre, String description, String instructeur, LocalDate dateDebut, LocalDate dateFin, String lieu) {
        super();
        this.titre = titre;
        this.description = description;
        this.instructeur = instructeur;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.lieu = lieu;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setInstructeur(String instructeur) {
        this.instructeur = instructeur;
    }

    public void setDateDebut(LocalDate dateDebut) {
        this.dateDebut = dateDebut;
    }

    public void setDateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public Long getId() {
        return id;
    }

    public String getTitre() {
        return titre;
    }

    public String getDescription() {
        return description;
    }

    public String getInstructeur() {
        return instructeur;
    }

    public LocalDate getDateDebut() {
        return dateDebut;
    }

    public LocalDate getDateFin() {
        return dateFin;
    }

    public String getLieu() {
        return lieu;
    }
}
