import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Authenticate } from '../models/authenticate.model';
import { jwtDecode } from "jwt-decode";
import { Payload } from '../models/jwt-payload';
import { Observable, interval, of } from 'rxjs';

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

    verifyToken(): boolean {
        const token = this.getAuthToken();
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        }
        return false;
    }

    clearAuthToken() {
        localStorage.removeItem('token');
        this.isLoggedIn = false;
    }

    isAuthenticated(): boolean {
        const loggedIn = !!localStorage.getItem('token');
        return loggedIn;
    }

    getUserRole(): string | null {
        const token = this.getAuthToken();
        if (token) {
            const decodedToken = jwtDecode<Payload>(token);
            console.log(decodedToken.role);
            return decodedToken.role || null;
        }
        return null;
    }
}