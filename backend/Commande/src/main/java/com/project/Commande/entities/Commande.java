package com.project.Commande.entities;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.Commande.Enum.EtatCommande;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Commande implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    LocalDateTime date;
    @Enumerated(EnumType.STRING)
    EtatCommande etat;

    long idProduit;
    long idUser;
    public void setEtat(EtatCommande etat) {
        this.etat = etat;
    }

    public void setIdProduit(long idProduit) {
        this.idProduit = idProduit;
    }

    public void setIdUser(long idUser) {
        this.idUser = idUser;
    }
}
