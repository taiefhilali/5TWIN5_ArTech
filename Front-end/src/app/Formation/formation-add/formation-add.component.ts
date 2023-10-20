import { Component } from '@angular/core';
import { Formation } from 'app/auth/models/formation';
import { FormationService } from 'app/auth/service/formation.service';

@Component({
  selector: 'app-formation-add',
  templateUrl: './formation-add.component.html',
  styleUrls: ['./formation-add.component.css']
})
export class FormationAddComponent {

  formation: Formation = new Formation();

  constructor(private formationService: FormationService) { }

  onSubmit() {
    this.formationService.addFormation(this.formation).subscribe(result => {
      console.log('Formation ajouté avec succès:', result);
      // Réinitialisez le formulaire ou redirigez l'utilisateur
      this.formation = new Formation();
    });
  }
}
