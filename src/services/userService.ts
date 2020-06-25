import { Injectable } from '@angular/core';
import { User } from '../app/Models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private url = 'https://localhost:5001/api/registered-users/';

  postUser(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }
}
