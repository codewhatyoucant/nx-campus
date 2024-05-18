// imports
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

// @NgModule decorator with its metadata
@NgModule({
    declarations: [LoginComponent],
    imports: [],
    providers: [],
    bootstrap: [LoginComponent]
})
export class LoginModule { }