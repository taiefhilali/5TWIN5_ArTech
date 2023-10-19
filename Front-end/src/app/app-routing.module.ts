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
import { ChatComponent } from './chat/chat/chat.component';
import { AuthGuard } from './auth/helpers/auth.guards';


const routes: Routes = [
  // Other routes
  { path: 'categories', component: ViewCategoriesComponent
  ,canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] }, },
  { path: 'add-category', component: AddCategoryComponent
  ,canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] }, },
  { path: 'quizzes', component: ViewQuizzesComponent ,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] }, },
  { path: 'add-quiz', component: AddQuizzesComponent,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] }, },
  { path: 'view-questions/:qid/:title', component: ViewQuizQuestionsComponent,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] }, },
  { path: 'updatequiz/:qid', component: UpdateQuizzesComponent,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] }, },
  { path: 'updatecat/:cid', component: UpdateCategoryComponent ,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] },},
  { path: 'add-question/:qid/:title', component: AddQuestionComponent,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] }, },
  { path: 'load-quiz/:cId', component: ChatComponent ,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] },},
  { path: 'chat/:username', component: ChatComponent
  ,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] }, },


  




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
