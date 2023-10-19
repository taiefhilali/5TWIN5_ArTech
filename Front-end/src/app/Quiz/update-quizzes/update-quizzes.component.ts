import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'app/auth/service/category.service';
import { QuizService } from 'app/auth/service/quiz.service';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quizzes',
  templateUrl: './update-quizzes.component.html',
  styleUrls: ['./update-quizzes.component.scss']
})
export class UpdateQuizzesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _quiz: QuizService,private cat:CategoryService) { }
qId=0;
quiz;
categories;
  ngOnInit(): void {
this.qId=this.route.snapshot.params.qid;
this._quiz.getQuiz(this.qId).subscribe((data:any) => {
this.quiz=data;
console.log(this.quiz);
}, (error)=>{
  console.log('error');

});
this.cat.getCategories().subscribe((data:any)=>
{
  this.categories=data;
}, (error)=>{
  console.log('error loading category');

})

  }
//update
public updateData(){
  //validate

  this._quiz.updateQuiz(this.quiz).subscribe((data) => {

    Swal.fire("Success!!",'Updated','success');
  },(error)=>{
    Swal.fire("Error!!",' Not Updated','error');
  });
}
}
