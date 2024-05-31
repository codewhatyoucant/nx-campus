import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { EMPTY, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../environment';

export interface CourseDto {
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export interface CurriculumDto {
    title: string;
    description: string;
    courses: CourseDto[];
}


@Injectable()
export class CurriculumService {
    http = inject(HttpClient);

    getCurriculum() {
        let url = `${environment.apiBaseUrl}/curriculum`;
        return this.http.get<CurriculumDto[]>(url);
    }

}

