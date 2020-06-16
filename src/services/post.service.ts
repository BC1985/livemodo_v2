import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../app/post';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  //   private url = 'http://jsonplaceholder.typicode.com/posts';
  // private url = 'https://stormy-mesa-41939.herokuapp.com/api/reviews';
  private url = 'https://localhost:5001/api/reviews/';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
}
