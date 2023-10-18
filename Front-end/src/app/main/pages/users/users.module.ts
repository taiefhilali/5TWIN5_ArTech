import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from 'app/auth/helpers';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { FormsModule } from '@angular/forms';
import { UsersComponent } from 'app/main/pages/users/users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
  }
];

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, CoreCommonModule, ContentHeaderModule,FormsModule ],

  providers: []
})
export class UsersModule {}