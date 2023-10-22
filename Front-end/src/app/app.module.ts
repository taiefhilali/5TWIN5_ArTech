import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { ViewCategoriesComponent } from './Quiz/view-categories/view-categories.component';
//import { AddCategoryComponent } from './Quiz/add-category/add-category.component';
import { CategoryService } from './auth/service/category.service'; // Import the service
import { QuizService } from './auth/service/quiz.service'; 
import { FormsModule } from '@angular/forms';
import { AddCategoryComponent } from './Quiz/add-category/add-category.component';
import { ViewQuizzesComponent } from './Quiz/view-quizzes/view-quizzes.component';
import { UpdateCategoryComponent } from './Quiz/update-category/update-category.component';
import { DeleteCategoryComponent } from './Quiz/delete-category/delete-category.component';
import { AddQuizzesComponent } from './Quiz/add-quizzes/add-quizzes.component';
import { UpdateQuizzesComponent } from './Quiz/update-quizzes/update-quizzes.component';
import { ViewQuestionsComponent } from './Quiz/view-questions/view-questions.component';
import { ViewQuizQuestionsComponent } from './Quiz/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './Quiz/add-question/add-question.component';
import { LoadQuizComponent } from './Quiz/load-quiz/load-quiz.component';
import { ViewPostsComponent } from './Posts/view-posts/view-posts/view-posts.component';
import { DetailsPostsComponent } from './Posts/details-posts/details-posts/details-posts.component';
import { CreateCommentComponent } from './Posts/create-comment/create-comment/create-comment.component';
import { ViewCommentComponent } from './Posts/view-comment/view-comment/view-comment.component';
import { CreatePostsComponent } from './Posts/create-posts/create-posts/create-posts.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CvService } from './auth/service/cv.service';
import { CommonModule } from '@angular/common';
import { CvViewComponent } from './Posts/cv-view/cv-view.component';
import { CoursListComponent } from './Cours/cours-list/cours-list.component';
import { CoursAddComponent } from './Cours/cours-add/cours-add.component';
import { CoursEditComponent } from './Cours/cours-edit/cours-edit.component';
import { FormationAddComponent } from './Formation/formation-add/formation-add.component';
import { FormationListComponent } from './Formation/formation-list/formation-list.component';
import { ListFormationComponent } from './commande/list-formation/list-formation.component';
import { ListAdminCommandeComponent } from './commande/list-admin-commande/list-admin-commande.component';
import { JwtInterceptor } from './auth/helpers/jwt.interceptor';





const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    redirectTo: '/pages/authentication/login-v2',
    pathMatch: 'full'
  },

  
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({
  declarations: [AppComponent, ViewCategoriesComponent,AddCategoryComponent, ViewQuizzesComponent,ViewQuizzesComponent, UpdateCategoryComponent, 
    DeleteCategoryComponent, AddQuizzesComponent, UpdateQuizzesComponent, ViewQuestionsComponent, ViewQuizQuestionsComponent, AddQuestionComponent,
     LoadQuizComponent,CreatePostsComponent, ViewPostsComponent,DetailsPostsComponent, CreateCommentComponent,CreateCommentComponent, ViewCommentComponent,
     CvViewComponent,CoursListComponent, CoursAddComponent, 
    CoursEditComponent, FormationAddComponent, FormationListComponent,
    ListFormationComponent,ListAdminCommandeComponent
  ],
  imports: [
    NgSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,

    // App modules
    LayoutModule,
    SampleModule,
    AppRoutingModule  // Add the AppRoutingModule here

  ],

  bootstrap: [AppComponent],
  providers: [CategoryService,QuizService,CvService,{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true, 
  }],
})
export class AppModule {}
