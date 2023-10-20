import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'app/auth/models/formation';
import { FormationService } from 'app/auth/service/formation.service';

@Component({
  selector: 'app-formation-edit',
  templateUrl: './formation-edit.component.html',
  styleUrls: ['./formation-edit.component.css']
})
export class FormationEditComponent implements OnInit{

  formationForm: FormGroup;
  formation: Formation;
  formationId: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    this.formationForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.maxLength(1000), Validators.minLength(10)]],
      dateDebut: ['', [Validators.required]],
      dateFin: ['', [Validators.required]],
      lieu: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(4)]]
    });

    this.route.params.subscribe(params => {
      this.formationId = params['id'];
      this.formationService.getFormationById(this.formationId).subscribe(formation => {
        this.formation = formation;
        this.initializeForm();
      });
    });
  }

  initializeForm() {
    this.formationForm.setValue({
      description: this.formation.description,
      dateDebut: this.formation.dateDebut,
      dateFin: this.formation.dateFin,
      lieu: this.formation.lieu
    });
  }

  updateFormation() {
    if (this.formationForm.valid) {
      const updatedFormation: Formation = this.formationForm.value;
      this.formationService.updateFormation(updatedFormation).subscribe(response => {
        console.log('Formation updated:', response);
      });
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  }
}








