import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit{

  cours: Cours[] = [];

  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
    this.coursService.getAllCours().subscribe(data => {
      this.cours = data;
    });
  }


}
