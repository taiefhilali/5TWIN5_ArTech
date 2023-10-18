import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseUrl = 'http://localhost:8080/formations'; // Assurez-vous d'ajuster l'URL si nécessaire

  constructor(private http: HttpClient) { }

  getAllFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${this.baseUrl}/all`);
  }

  getFormationById(id: number): Observable<Formation> {
    return this.http.get<Formation>(`${this.baseUrl}/form/${id}`);
  }

  addFormation(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(`${this.baseUrl}/add`, formation);
  }

  updateFormation(form: Formation): Observable<Formation> {
    return this.http.put<Formation>(`${this.baseUrl}/edit`, form);
  }

  deleteFormation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
