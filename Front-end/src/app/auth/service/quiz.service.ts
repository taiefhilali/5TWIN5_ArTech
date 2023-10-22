import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  currentUser;
  private apiUrl = 'http://localhost:8070/quiz-s/api/quizzes'; // Replace with your API endpoint

  constructor(private http: HttpClient,private _user:UserService,private authService:AuthenticationService) {

    this.authService.currentUser.subscribe((user) => {
      this.currentUser = user;
    });
  }

  getQuizzes(): Observable<Quiz[]> {
    // Make an HTTP GET request to fetch quiz data from your API
    return this.http.get<Quiz[]>(this.apiUrl + `/user/${this.currentUser.id}`);
  }
  addQuiz(quiz) {
    return this.http.post(`${this.apiUrl}/add/${this.currentUser.username}`, quiz);
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
