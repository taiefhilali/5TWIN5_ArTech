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
import { CvViewComponent } from './Posts/cv-view/cv-view.component';
import { LoadQuizComponent } from './Quiz/load-quiz/load-quiz.component';
import { CoursListComponent } from './Cours/cours-list/cours-list.component';
import { CoursAddComponent } from './Cours/cours-add/cours-add.component';
import { CoursEditComponent } from './Cours/cours-edit/cours-edit.component';
import { FormationListComponent } from './Formation/formation-list/formation-list.component';
import { FormationAddComponent } from './Formation/formation-add/formation-add.component';
import { ListFormationComponent } from './commande/list-formation/list-formation.component';
import { ListAdminCommandeComponent } from './commande/list-admin-commande/list-admin-commande.component';


const routes: Routes = [
  // Other routes
  { path: 'categories', component: ViewCategoriesComponent
  ,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] }, },
  { path: 'add-category', component: AddCategoryComponent
  ,canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] }, },
  { path: 'quizzes', component: ViewQuizzesComponent ,
  canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] }, },
  { path: 'add-quiz', component: AddQuizzesComponent,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] }, },
  { path: 'view-questions/:qid/:title', component: ViewQuizQuestionsComponent,
  canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] }, },
  { path: 'updatequiz/:qid', component: UpdateQuizzesComponent,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] }, },
  { path: 'updatecat/:cid', component: UpdateCategoryComponent ,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] },},
  { path: 'add-question/:qid/:title', component: AddQuestionComponent,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','TEACHER'] }, },
  { path: 'load-quiz/:cid', component: LoadQuizComponent,
  canActivate: [AuthGuard], data: { roles: ['ADMIN','USER'] }, },
  
  { path: 'create-posts', component: CreatePostsComponent,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] }, },

  { path: 'view-posts', component: ViewPostsComponent ,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] },},
  { path: 'details-posts/:postId', component: DetailsPostsComponent,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] }, },

  
  { path: 'cv', component: CvViewComponent },
  // { path: 'categories', component: ViewCategoriesComponent,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] }, },
  // { path: 'add-category', component: AddCategoryComponent },
  // { path: 'quizzes', component: ViewQuizzesComponent },
  // { path: 'updatecat/:id', component:UpdateCategoryComponent },
  { path: 'cours', component:  CoursListComponent,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] },},
  { path: 'cours/add', component:  CoursAddComponent,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] },},
  { path: 'cours/edit', component:  CoursEditComponent,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] },},
  { path: 'formation', component:  FormationListComponent,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] },},
  { path: 'formation/add', component:  FormationAddComponent,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] },},
  { path: 'formationsC', component: ListFormationComponent,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] },},
  { path: 'Admin-commande', component: ListAdminCommandeComponent,canActivate: [AuthGuard], data: { roles: ['USER','ADMIN','TEACHER'] }, },

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
