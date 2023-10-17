import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit{

  formation: Formation[] = [];

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formationService.getAllFormations().subscribe(data => {
      this.formation = data;
    });
  }

}
