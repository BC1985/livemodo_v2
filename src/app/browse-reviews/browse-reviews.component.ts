import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/services/review.service';
@Component({
  selector: 'app-browse-reviews',
  templateUrl: './browse-reviews.component.html',
  styleUrls: ['./browse-reviews.component.scss'],
})
export class BrowseReviewsComponent implements OnInit {
  public posts = [];
  isLoading = true;
  constructor(private _reviewService: ReviewService) {}

  ngOnInit() {
    this._reviewService.getReviews().subscribe((data) => {
      this.posts = data;
      this.isLoading = false;
      console.log(data);
    });
  }
}
