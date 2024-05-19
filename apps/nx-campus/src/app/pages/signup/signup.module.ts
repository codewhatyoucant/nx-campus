// imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup.component';
import { SignupFormModule } from '@nx-campus/ui-lib';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  }
];

@NgModule({
  declarations: [SignupComponent],
  imports: [
    RouterModule.forChild(routes),
    SignupFormModule,
  ],
  providers: [],
})
export class SignupModule { }