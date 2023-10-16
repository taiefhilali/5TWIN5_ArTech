import { Component, OnInit } from '@angular/core';
import { QuizService } from 'app/auth/service/quiz.service';
//import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { Quiz } from 'app/auth/models/quiz';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.scss']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe((data) => {
      this.quizzes = data;
    });
  }
}
