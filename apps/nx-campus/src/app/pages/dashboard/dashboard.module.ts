// imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { BreadcrumbComponent, ClassesComponent, CourseComponent, DashboardHeaderComponent } from '@nx-campus/ui-lib';
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { CurriculumService } from '../../services/curriculum.service';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'class/:id',
        loadComponent: () => import('./class/class.component').then(m => m.ClassComponent)
    },
    {
        path: 'course/:id',
        loadComponent: () => import('./course/course.component').then(m => m.CourseComponent)
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
        CourseComponent,
        CommonModule

    ],
    providers: [AuthService, DashboardService, CurriculumService],
})
export class DashboardModule { }