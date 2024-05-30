// imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin.component';


const routes: Routes = [
    {
        path: '',
        component: AdminComponent
    }
];

@NgModule({
    declarations: [AdminComponent],
    imports: [
        RouterModule.forChild(routes),
        HttpClientModule
    ],
    providers: [AuthService],
})
export class AdminModule { }