// imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    }
  ];
  
  @NgModule({
    declarations: [LoginComponent],
    imports: [
      RouterModule.forChild(routes)
    ],
    providers: [],
  })
export class LoginModule { }