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


@Injectable()
export class DashboardService {
    http = inject(HttpClient);

    getClass() {
        let url = `${environment.apiBaseUrl}/class`;
        return this.http.get<ClassDto[]>(url);
    }

}

