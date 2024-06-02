// imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { BreadcrumbComponent, LoginFormModule } from '@nx-campus/ui-lib';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        RouterModule.forChild(routes),
        LoginFormModule,
        HttpClientModule,
        BreadcrumbComponent
    ],
    providers: [AuthService],
})
export class LoginModule { }