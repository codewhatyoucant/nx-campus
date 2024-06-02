import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { BreadcrumbComponent } from '@nx-campus/ui-lib';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    BreadcrumbComponent
  ],
  providers: [],
})
export class HomeModule { }