import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl = 'http://localhost:8099/api/quizzes'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getQuizzes(): Observable<Quiz[]> {
    // Make an HTTP GET request to fetch quiz data from your API
    return this.http.get<Quiz[]>(this.apiUrl + '/allquiz');
  }
}
