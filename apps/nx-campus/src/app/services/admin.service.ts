import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { EMPTY, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../environment';

export interface CurriculumDto {
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

export interface CourseDto {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    featured: boolean;
}

export interface UserDto {
    username: string;
    password: string;
    email: string;
}

export interface LessonDto {
    module: string;
    title: string;
    subtitle: string;
    type: string;
}

export interface RoleDto {
    title: string;
}


@Injectable()
export class AdminService {
    http = inject(HttpClient);

    getClass() {
        let url = `${environment.apiBaseUrl}/admin/class`;
        return this.http.get<ClassDto[]>(url);
    }

    getCourses() {
        let url = `${environment.apiBaseUrl}/admin/course`;
        return this.http.get<CourseDto[]>(url);
    }

    getCurriculum() {
        let url = `${environment.apiBaseUrl}/admin/curriculum`;
        return this.http.get<CurriculumDto[]>(url);
    }

    getLessons() {
        let url = `${environment.apiBaseUrl}/admin/lesson`;
        return this.http.get<LessonDto[]>(url);
    }

    getUser() {
        let url = `${environment.apiBaseUrl}/admin/user`;
        return this.http.get<UserDto[]>(url);
    }

}

