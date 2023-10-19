import { Component, OnInit } from '@angular/core';
import { QuizService } from 'app/auth/service/quiz.service';
import { Quiz } from 'app/auth/models/quiz';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.scss']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.loadQuizzes();
  }

  loadQuizzes() {
    this.quizService.getQuizzes().subscribe((data) => {
      // Reverse the order of the quizzes array to show the most recent quiz at the top
      this.quizzes = data.reverse();
    });
  }

  deleteQuiz(qId) {
    this.quizService.deleteQuiz(qId).subscribe(
      (data) => {
        
        Swal.fire('Success', 'QUIZ deleted', 'success');
        this.loadQuizzes(); // Refresh the quiz list
      },
      (error) => {
        Swal.fire('Error', 'QUIZ not deleted', 'error');
      }
    );
  }
}
