import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoriesComponent } from './Quiz/view-categories/view-categories.component';
import { AddCategoryComponent } from './Quiz/add-category/add-category.component';
import { ViewQuizzesComponent } from './Quiz/view-quizzes/view-quizzes.component';
import { UpdateCategoryComponent } from './Quiz/update-category/update-category.component';
import { CreatePostsComponent } from './Posts/create-posts/create-posts/create-posts.component';
import { ViewPostsComponent } from './Posts/view-posts/view-posts/view-posts.component';
import { DetailsPostsComponent } from './Posts/details-posts/details-posts/details-posts.component';


const routes: Routes = [
  // Other routes
  { path: 'categories', component: ViewCategoriesComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'quizzes', component: ViewQuizzesComponent },
  { path: 'updatecat/:id', component:UpdateCategoryComponent },
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
