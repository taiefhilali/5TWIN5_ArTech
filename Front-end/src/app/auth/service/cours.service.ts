import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  private baseUrl = 'http://localhost:8070/formations-s/courses'; // Assurez-vous d'ajuster l'URL si nécessaire

  constructor(private http: HttpClient) { }

  getAllCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(`${this.baseUrl}/all`);
  }

  getCoursById(id: number): Observable<Cours> {
    return this.http.get<Cours>(`${this.baseUrl}/cours/${id}`);
  }

  addCours(cours: Cours): Observable<Cours> {
    return this.http.post<Cours>(`${this.baseUrl}/add`, cours);
  }

  updateCours(cours: Cours): Observable<Cours> {
    return this.http.put<Cours>(`${this.baseUrl}/edit`, cours);
  }

  deleteCours(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}

