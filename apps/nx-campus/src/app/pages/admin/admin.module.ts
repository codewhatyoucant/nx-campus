// imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { AdminLibComponent, BreadcrumbComponent } from '@nx-campus/ui-lib';
import { ClassesComponent } from './classes/classes.component';
import { CoursesComponent } from './courses/courses.component';
import { CurriculumsComponent } from './curriculums/curriculums.component';
import { LessonsComponent } from './lessons/lessons.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserService } from '../../services/user.service';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        data: { "breadcrumb": "Dashboard", title: "Dashboard" }
    },
    {
        path: 'users',
        loadComponent: () => import('./users/users.component').then(m => m.UsersComponent),
        data: { "breadcrumb": "Benutzer", title: "Benutzer" }
    },
    {
        path: 'classes',
        loadComponent: () => import('./classes/classes.component').then(m => m.ClassesComponent),
        data: { "breadcrumb": "Klassen", title: "Klassen" }
    },
    {
        path: 'curriculums',
        loadComponent: () => import('./curriculums/curriculums.component').then(m => m.CurriculumsComponent),
        data: { "breadcrumb": "Lehrpläne", title: "Lehrpläne" }
    },
    {
        path: 'courses',
        loadComponent: () => import('./courses/courses.component').then(m => m.CoursesComponent),
        data: { "breadcrumb": "Kurse", title: "Kurse" }
    },
    {
        path: 'lessons',
        loadComponent: () => import('./lessons/lessons.component').then(m => m.LessonsComponent),
        data: { "breadcrumb": "Lektionen", title: "Lektionen" }
    }
];

@NgModule({
    declarations: [AdminComponent],
    imports: [
        RouterModule.forChild(routes),
        HttpClientModule,
        AdminLibComponent,
        ClassesComponent,
        CoursesComponent,
        CurriculumsComponent,
        LessonsComponent,
        BreadcrumbComponent,
    ],
    providers: [AuthService, UserService],
    exports: [AdminLibComponent]
})
export class AdminModule { }