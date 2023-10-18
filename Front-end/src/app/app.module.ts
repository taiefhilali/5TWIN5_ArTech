import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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
import { ReactiveFormsModule } from '@angular/forms';
import { CoursListComponent } from './Cours/cours-list/cours-list.component';
import { CoursAddComponent } from './Cours/cours-add/cours-add.component';
import { CoursEditComponent } from './Cours/cours-edit/cours-edit.component';
import { FormationAddComponent } from './Formation/formation-add/formation-add.component';
import { FormationListComponent } from './Formation/formation-list/formation-list.component';



const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({
  declarations: [AppComponent, ViewCategoriesComponent,AddCategoryComponent, ViewQuizzesComponent,ViewQuizzesComponent, UpdateCategoryComponent, DeleteCategoryComponent, CoursListComponent, CoursAddComponent, 
  CoursEditComponent, FormationAddComponent, FormationListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
  providers: [CategoryService,QuizService],
})
export class AppModule {}