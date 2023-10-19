import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'app/auth/service/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.scss']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId;
  qTitle;
  questions = [];
  showButton = false; // Initialize showButton to false

  constructor(private route: ActivatedRoute, private question: QuestionService) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params.qid;
    this.qTitle = this.route.snapshot.params.title;

    // Fetch and sort the questions by createdAt timestamp in descending order
    this.question.getQuestionsofQuiz(this.qId).subscribe((data: any) => {
      // Assuming 'createdAt' is the timestamp field, sort by it in descending order
      this.questions = data.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }, (error) => {
      console.log(error);
    });

    console.log(this.qId);
  }
}
