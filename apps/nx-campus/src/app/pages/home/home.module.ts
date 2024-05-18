// imports
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

// @NgModule decorator with its metadata
@NgModule({
    declarations: [HomeComponent],
    imports: [],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }