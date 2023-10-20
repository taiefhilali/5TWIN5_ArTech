import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'app/auth/service/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.scss'],
  
})
export class LoadQuizComponent implements OnInit {
catId;
quizzes;
  constructor(private route:ActivatedRoute,private _quiz:QuizService) { }

  ngOnInit(): void {
    console.log('Quiz Data:', this.quizzes);

this.catId=this.route.snapshot.params.cid;
if(this.catId ==0){
  console.log("Load all the quiz");


  this._quiz.getQuizzes().subscribe(
    (data:any)=> {
      this.quizzes=data;
      console.log(this.quizzes);

    } ),(error)=>{
      console.log(error);

    }
}else{
  console.log("load specific quiz");
}

}

}
