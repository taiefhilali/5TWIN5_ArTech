import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cv } from '../models/Cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  uploadCv(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.apiUrl}/`, formData);
  }

  getCVs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(`${this.apiUrl}/cvs`);
  }

  
}