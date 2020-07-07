import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../app/Models/Login';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  
  private url = 'https://localhost:5001/api/login/';
  constructor(private http: HttpClient, private router: Router) {}

  
    login(username: string, password: string): Observable<any> {
      let params = {
        params: new HttpParams()
          .append('username', username)
          .append('password', password),
      };
      return this.http.post<any>(this.url, Login, params);
    
    }

      isLoggedIn(){
        return !!localStorage.getItem('token')
      }
    }