import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface UserDto {
    username: string;
    email: string;
    role: string;
    password: string;
}

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

  updateUserDetails(id: string, userDetails: Partial<UserDto>): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getAuthToken()
      })
    };

    console.log('PUT URL:', `http://localhost:3000/api/user/${id}`);  
    console.log('User Details:', userDetails); 

    return this.httpClient
      .patch(`http://localhost:3000/api/user/${id}`, userDetails, httpOptions)
      .pipe(
        tap((res: any) => {
          console.log('User details updated', res);
          return res;
        })
      );
  }
}
