import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quiz } from 'app/auth/models/quiz';
import { CategoryService } from 'app/auth/service/category.service';
import { QuizService } from 'app/auth/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrls: ['./add-quizzes.component.scss']
})
export class AddQuizzesComponent implements OnInit {

  
  quizForm: FormGroup;
  categories: any[]; // Define the categories property
  quiz: Quiz;
quizData={
  title:'',
  description:'',
  maxMarks:'',
  numberofQuestions:'',
  active:true,
  category:{
    cid:'',

  },
}

  constructor(private formBuilder: FormBuilder,private quizService: QuizService,private categoryService: CategoryService) {
    this.quizForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      maxMark: ['', Validators.required],
      numberofQuestions: ['', Validators.required],
      category: [null, Validators.required], // Use a dropdown to select the category
    });
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
      
    });  }

    

  // Implement the addQuiz() function


  addQuiz() {
    console.log('Quiz Data:', this.quizData); // Log the data before sending the request
  
    this.quizService.addQuiz(this.quizData).subscribe((newQuiz) => {
      if (newQuiz) {
        Swal.fire('Success', 'Quiz added successfully', 'success');
      } else {
        Swal.fire('Error', 'Quiz could not be added', 'error');
      }
      console.log('Quiz added successfully.');
    });
  }
  
  }