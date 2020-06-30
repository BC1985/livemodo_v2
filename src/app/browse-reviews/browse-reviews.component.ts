import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-browse-reviews',
  templateUrl: './browse-reviews.component.html',
  styleUrls: ['./browse-reviews.component.scss'],
})
export class BrowseReviewsComponent implements OnInit {
  public posts = [];
  isLoading = true;

  constructor(private _postService: PostService) {}

  ngOnInit() {
    this._postService.getPosts().subscribe((data) => {
      this.posts = data;
      this.isLoading = false;
      console.log(data);
    });
  }
}
