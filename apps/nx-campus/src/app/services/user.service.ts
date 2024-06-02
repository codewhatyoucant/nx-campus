import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Authenticate } from '../models/authenticate.model';
import { EMPTY, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable()
export class UserService {
    token: string | undefined;

    constructor(private httpClient: HttpClient, private authService: AuthService) { }

    getAllUsers(): Observable<User[]> {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.authService.getAuthToken()
            })
        }
        return this.httpClient
            .get('http://localhost:3000/api/user', httpOptions)
            .pipe(
                tap((res: any) => {
                    console.log('Profile triggert', res);
                    return res;
                })
            );
    }


    getProfile(): Observable<User> {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.authService.getAuthToken()
            })
        }

        return this.httpClient
            .get('http://localhost:3000/api/user/profile', httpOptions)
            .pipe(
                tap((res: any) => {
                    console.log('Profile triggert', res);
                    return res;
                })
            );
    }
    getUserDetails(id: string): Observable<User> {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.authService.getAuthToken()
            })
        }

        return this.httpClient
            .get(`http://localhost:3000/api/user/${id}`, httpOptions)
            .pipe(
                tap((res: any) => {
                    console.log('Details triggert', res);
                    return res;
                })
            );
    }

}

