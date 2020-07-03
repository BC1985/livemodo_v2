
import { Injectable } from '@angular/core';
import { Review } from '../app/Models/Review';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}
  private url = 'https://localhost:5001/api/reviews/';

  postReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.url, review);
  }
}
