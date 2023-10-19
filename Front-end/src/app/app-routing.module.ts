import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoriesComponent } from './Quiz/view-categories/view-categories.component';
import { AddCategoryComponent } from './Quiz/add-category/add-category.component';
import { ViewQuizzesComponent } from './Quiz/view-quizzes/view-quizzes.component';
import { UpdateCategoryComponent } from './Quiz/update-category/update-category.component';
import { AddQuizzesComponent } from './Quiz/add-quizzes/add-quizzes.component';
import { UpdateQuizzesComponent } from './Quiz/update-quizzes/update-quizzes.component';
import { ViewQuizQuestionsComponent } from './Quiz/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './Quiz/add-question/add-question.component';


const routes: Routes = [
  // Other routes
  { path: 'categories', component: ViewCategoriesComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'quizzes', component: ViewQuizzesComponent },
  { path: 'add-quiz', component: AddQuizzesComponent },
  { path: 'view-questions/:qid/:title', component: ViewQuizQuestionsComponent },
  { path: 'updatequiz/:qid', component: UpdateQuizzesComponent },
  { path: 'updatecat/:cid', component: UpdateCategoryComponent },
  { path: 'add-question/:qid/:title', component: AddQuestionComponent },

  




];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ],
  exports:[
    RouterModule,
  ],
})
export class AppRoutingModule { }
