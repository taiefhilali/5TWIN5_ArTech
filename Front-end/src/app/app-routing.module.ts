import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoriesComponent } from './Quiz/view-categories/view-categories.component';
import { AddCategoryComponent } from './Quiz/add-category/add-category.component';
import { ViewQuizzesComponent } from './Quiz/view-quizzes/view-quizzes.component';
import { UpdateCategoryComponent } from './Quiz/update-category/update-category.component';
import { CoursListComponent } from './Cours/cours-list/cours-list.component';
import { CoursAddComponent } from './Cours/cours-add/cours-add.component';
import { CoursEditComponent } from './Cours/cours-edit/cours-edit.component';
import { FormationListComponent } from './Formation/formation-list/formation-list.component';
import { FormationAddComponent } from './Formation/formation-add/formation-add.component';


const routes: Routes = [
  // Other routes
  { path: 'categories', component: ViewCategoriesComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'quizzes', component: ViewQuizzesComponent },
  { path: 'updatecat/:id', component:UpdateCategoryComponent },
  { path: 'cours', component:  CoursListComponent},
  { path: 'cours/add', component:  CoursAddComponent},
  { path: 'cours/edit', component:  CoursEditComponent},
  { path: 'formation', component:  FormationListComponent},
  { path: 'formation/add', component:  FormationAddComponent},





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
