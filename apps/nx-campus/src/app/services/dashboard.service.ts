import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { EMPTY, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../environment';

interface CurriculumDto {
    title: string;
    description: string;
    courses: string[];
}

export interface ClassDto {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    active: boolean;
}

export interface LessonDto {
    module: string;
    title: string;
    subtitle: string;
    type: string;
    duration: number;
}

export interface CourseDto {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    featured: boolean;
    lessons: LessonDto[];
}


@Injectable()
export class DashboardService {
    http = inject(HttpClient);

    getClass() {
        let url = `${environment.apiBaseUrl}/class`;
        return this.http.get<ClassDto[]>(url);
    }
    getCourse(id: string) {
        let url = `${environment.apiBaseUrl}/course/${id}`;
        return this.http.get<CourseDto[]>(url);
    }

}

