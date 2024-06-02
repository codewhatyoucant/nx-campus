import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Class } from '../models/class.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface UserDto {
    username: string;
    email: string;
    role: string;
    password: string;
}

@Injectable()
export class ClassService {
  token: string | undefined;

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllClasses(): Observable<Class[]> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getAuthToken()
      })
    }
    return this.httpClient
      .get('http://localhost:3000/api/class', httpOptions)
      .pipe(
        tap((res: any) => {
          console.log('Classes triggert', res);
          return res;
        })
      );
  }


  getClassDetails(id: string): Observable<Class> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getAuthToken()
      })
    }

    return this.httpClient
      .get(`http://localhost:3000/api/class/${id}`, httpOptions)
      .pipe(
        tap((res: any) => {
          console.log('Details triggert', res);
          return res;
        })
      );
  }

  updateUserDetails(id: string, classDetails: Partial<Class>): Observable<Class> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getAuthToken()
      })
    };

    console.log('PUT URL:', `http://localhost:3000/api/class/${id}`);  
    console.log('User Details:', classDetails); 

    return this.httpClient
      .patch(`http://localhost:3000/api/class/${id}`, classDetails, httpOptions)
      .pipe(
        tap((res: any) => {
          console.log('Class details updated', res);
          return res;
        })
      );
  }
}
