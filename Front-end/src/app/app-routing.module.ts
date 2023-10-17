import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursListComponent } from './pages/cours-list/cours-list.component';
import { CoursAddComponent } from './pages/cours-add/cours-add.component';
import { CoursEditComponent } from './pages/cours-edit/cours-edit.component';
import { FormationListComponent } from './pages/formation-list/formation-list.component';
import { FormationAddComponent } from './pages/formation-add/formation-add.component';
import { FormationEditComponent } from './pages/formation-edit/formation-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/cours', pathMatch: 'full' },  // Redirige par défaut vers la liste des cours
  { path: 'cours', component: CoursListComponent },
  { path: 'cours/add', component: CoursAddComponent },
  { path: 'cours/edit', component: CoursEditComponent },
  { path: 'formation', component: FormationListComponent },
  { path: 'formation/add', component: FormationAddComponent },
  { path: 'formation/edit', component: FormationEditComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
