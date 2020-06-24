import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
})
export class AddReviewComponent implements OnInit {

  constructor() { }

  public Performer: string;
  public Username: string;
  public ShowDate: string;
  public Venue: string;
  public Content: string;
  public Tagline: string;
  public rating: Int16Array;

  onSubmit(){}
  log(x) {
    console.log(x);
  }
  ngOnInit(): void {}
}
