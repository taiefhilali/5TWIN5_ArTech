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
import { AuthGuard } from './auth/helpers/auth.guards';
import { CreatePostsComponent } from './Posts/create-posts/create-posts/create-posts.component';
import { ViewPostsComponent } from './Posts/view-posts/view-posts/view-posts.component';
import { DetailsPostsComponent } from './Posts/details-posts/details-posts/details-posts.component';


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
  
  { path: 'create-posts', component: CreatePostsComponent },

  { path: 'view-posts', component: ViewPostsComponent },
  { path: 'details-posts/:postId', component: DetailsPostsComponent },

  




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
