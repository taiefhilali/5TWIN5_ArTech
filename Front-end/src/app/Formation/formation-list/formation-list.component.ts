import { Component, OnInit } from '@angular/core';
import { Formation } from 'app/auth/models/formation';
import { FormationService } from 'app/auth/service/formation.service';

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
