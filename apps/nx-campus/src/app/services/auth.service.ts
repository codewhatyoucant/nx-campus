import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Authenticate } from '../models/authenticate.model';
import { jwtDecode } from "jwt-decode";
import { Payload } from '../models/jwt-payload';

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