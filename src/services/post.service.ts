import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../app/post';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  private url = 'http://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
}
