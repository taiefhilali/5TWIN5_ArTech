import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'app/auth/service/question.service';
import { QuizService } from 'app/auth/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
qId;
qTitle;
question={
  quiz:{},
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:''
};
  constructor(
    private route:ActivatedRoute,
    private _question:QuestionService,
  ) { }

  ngOnInit(): void {

    this.qId=this.route.snapshot.params.qid;
    this.qTitle=this.route.snapshot.params.title;
this.question.quiz['qId']=this.qId;
  }

  formSubmit(){
   if(this.question.content.trim()=='' || this.question.content == null){
    return ;
   }
   if(this.question.option1.trim()=='' || this.question.option1 == null){
    return ;
   }
   if(this.question.option2.trim()=='' || this.question.option2 == null){
    return ;
   }

   if(this.question.option3.trim()=='' || this.question.option3 == null){
    return ;
   }
   if(this.question.option4.trim()=='' || this.question.option4 == null){
    return ;
   }

   this._question.AddQuestion(this.question).subscribe(
    (data:any)=> {
      console.log(data)
      Swal.fire('Success', 'Question added successfully', 'success');
    },(error)=> {
      Swal.fire('Error', 'Question could not be added', 'error');
    }    
   )
  }

}
