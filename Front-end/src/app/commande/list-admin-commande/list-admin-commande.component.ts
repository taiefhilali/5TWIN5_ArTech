import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormationService } from 'app/auth/service/formation.service';

@Component({
  selector: 'app-list-admin-commande',
  templateUrl: './list-admin-commande.component.html',
  styleUrls: ['./list-admin-commande.component.scss']
})
export class ListAdminCommandeComponent implements OnInit {
  commandes: any[] = [];

  constructor(private http: HttpClient) {}
  //http://localhost:9943/commandeMicroservice/commande/getall
  confirmerCommande(id: number) {
    const updatedCommande = { etat: 'Confirme' }; // Vous pouvez ajouter d'autres champs si nécessaire
    this.http.put(`http://localhost:8070/commande/update/${id}`, updatedCommande).subscribe((response: any) => {
      // Gérez la réponse du serveur (par exemple, mettez à jour l'état de la commande dans la liste)
      if (response) {
        // Commande confirmée avec succès
        // Mettez à jour l'état de la commande dans la liste ou effectuez d'autres actions nécessaires
        const commandeIndex = this.commandes.findIndex((commande) => commande.id === id);
        if (commandeIndex !== -1) {
          this.commandes[commandeIndex].etat = 'Confirme';
        }
      }
    });
  }
  
  getCommandes() {
    return this.http.get(`http://localhost:8070/commande/getall`);
  }
  ngOnInit(): void {
    this.getCommandes().subscribe((data: any) => {
      this.commandes = data;
    });
  }
  
}
