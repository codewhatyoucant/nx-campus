// imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { DashboardHeaderComponent } from '@nx-campus/ui-lib';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        RouterModule.forChild(routes),
        HttpClientModule,
        DashboardHeaderComponent
    ],
    providers: [AuthService],
})
export class DashboardModule { }