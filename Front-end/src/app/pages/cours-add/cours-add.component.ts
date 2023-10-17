import { Component } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-cours-add',
  templateUrl: './cours-add.component.html',
  styleUrls: ['./cours-add.component.css']
})
export class CoursAddComponent {

  cours: Cours = new Cours();

  constructor(private coursService: CoursService) { }

  onSubmit() {
    this.coursService.addCours(this.cours).subscribe(result => {
      console.log('Cours ajouté avec succès:', result);
      // Réinitialisez le formulaire ou redirigez l'utilisateur
      this.cours = new Cours();
    });
  }

}
