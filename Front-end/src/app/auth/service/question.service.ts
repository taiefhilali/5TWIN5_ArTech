import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:8099/api/questions'; // Replace with your API endpoint

  constructor(
    private http:HttpClient
  ) { }
  
  public getQuestionsofQuiz(qid){
    return this.http.get(`${this.apiUrl}/quiz/${qid}`)

  }
  public AddQuestion(question){
    return this.http.post(`${this.apiUrl}/addquestion`,question)

  }

  
}
