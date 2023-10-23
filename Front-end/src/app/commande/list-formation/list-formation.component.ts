// list-formation.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.scss']
})
export class ListFormationComponent {
  formations: any[] = [
    { id: 1, nom: 'Formation 1', prix: 100 },
    { id: 2, nom: 'Formation 2', prix: 150 },
    { id: 3, nom: 'Formation 3', prix: 200 },
    { id: 4, nom: 'Formation 1', prix: 100 },
    { id: 5, nom: 'Formation 1', prix: 100 },
    { id: 6, nom: 'Formation 1', prix: 100 },


  ];

  constructor(private http: HttpClient) {}

  acheterFormation(formation: any) {
    // Envoyer une requête POST au backend pour créer une commande
    const commande = {
      idProduit: formation.id,
      idUser: 1, // Remplacez par l'ID de l'utilisateur connecté
      etat: 'EnAttente',
      date: new Date()
    };

    this.http.post('http://localhost:8070/commande/add', commande).subscribe((response) => {
        // Afficher une alerte de succès avec Swal
        Swal.fire({
          icon: 'success',
          title: 'Succès!',
          text: 'Commande créée avec succès',
        });
      },
      (error: any) => {
        // Afficher une alerte d'erreur avec Swal
        Swal.fire({
          icon: 'error',
          title: 'Erreur!',
          text: 'Erreur lors de la création de la commande',
        });
    });
  }
}
