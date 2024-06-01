// imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout.component';


const routes: Routes = [
    {
        path: '',
        component: LogoutComponent
    }
];

@NgModule({
    declarations: [LogoutComponent],
    imports: [
        RouterModule.forChild(routes),
        HttpClientModule
    ],
    providers: [AuthService],
})
export class LogoutModule { }