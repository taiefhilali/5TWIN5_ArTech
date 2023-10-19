import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

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
  addQuiz(quiz) {
    return this.http.post(`${this.apiUrl}/addquiz`, quiz);
  }

  deleteQuiz(qId) {
    return this.http.delete(`${this.apiUrl}/delete/${qId}`)
      .pipe(
        tap(
          () => console.log('Quiz deleted successfully'),
          (error) => console.error('Error deleting quiz:', error)
        )
      );
  }

  //get the single quiz

  public getQuiz(qId){
    return this.http.get(`${this.apiUrl}/${qId}`);
  }


  //update quiz 

  
  public updateQuiz(quiz){
    return this.http.put(`${this.apiUrl}/updatequiz`,quiz);
  }
}
