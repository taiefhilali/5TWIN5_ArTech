import { Component } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cours-edit',
  templateUrl: './cours-edit.component.html',
  styleUrls: ['./cours-edit.component.css']
})
export class CoursEditComponent {

  cours: Cours = new Cours();

  constructor(private coursService: CoursService) { }

  onSubmit() {
    this.coursService.updateCours(this.cours).subscribe(result => {
      console.log('Cours Modifié avec succès:', result);
      // Réinitialisez le formulaire ou redirigez l'utilisateur
      // this.cours = new Cours();
    });
  }
}



