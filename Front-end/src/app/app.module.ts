import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursListComponent } from './pages/cours-list/cours-list.component';
import { FormationListComponent } from './pages/formation-list/formation-list.component';
import { CoursAddComponent } from './pages/cours-add/cours-add.component';
import { CoursEditComponent } from './pages/cours-edit/cours-edit.component';
import { FormationAddComponent } from './pages/formation-add/formation-add.component';
import { FormationEditComponent } from './pages/formation-edit/formation-edit.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CoursListComponent,
    FormationListComponent,
    CoursAddComponent,
    CoursEditComponent,
    FormationAddComponent,
    FormationEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
