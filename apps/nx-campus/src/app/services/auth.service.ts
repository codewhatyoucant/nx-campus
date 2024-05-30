import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Authenticate } from '../models/authenticate.model';
import { EMPTY, Observable, throwError } from 'rxjs';



@Injectable()
export class AuthService {
    token: string | undefined;
    isLoggedIn = false;

    constructor(private httpClient: HttpClient) { }

    login(authenticate: Authenticate) {
        return this.httpClient
            .post('http://localhost:3000/api/auth/login', authenticate)
            .pipe(
                tap((res: any) => {
                    console.log('AuthService.login() called', res);
                    this.token = res.token as string;
                    this.isLoggedIn = true;
                    this.setAuthToken(this.token);
                })
            );
    }

    setAuthToken(token: string) {
        localStorage.setItem('token', token);
    }

    getAuthToken(): string | null {
        return localStorage.getItem('token');
    }

    clearAuthToken() {
        localStorage.removeItem('token');
    }

    isAuthenticated(): boolean {
        return this.isLoggedIn;
    }
}

