// imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { BreadcrumbComponent, ClassesComponent, DashboardHeaderComponent } from '@nx-campus/ui-lib';
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';


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
        DashboardHeaderComponent,
        BreadcrumbComponent,
        ClassesComponent,
        CommonModule

    ],
    providers: [AuthService, DashboardService],
})
export class DashboardModule { }