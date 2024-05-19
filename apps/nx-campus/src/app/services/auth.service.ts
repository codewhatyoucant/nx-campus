import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Authenticate } from '../models/authenticate.model';



@Injectable()
export class AuthService {
    user: User | undefined;
    isAuthenticated: boolean | undefined;

    constructor(private httpClient: HttpClient) { }

    login(authenticate: Authenticate) {
        return this.httpClient
            .post<User>('http://localhost:3000/api/auth/login', authenticate)
            .pipe(
                tap((user: User) => {
                    this.isAuthenticated = true;
                    this.user = user;
                    this.setAuthToken(user.token);
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
}

