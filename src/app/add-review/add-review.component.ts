import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  constructor() { }

  public band_name: string;
  public show_date: number;
  public venue: string;
  public review: string;

  onSubmit(){}
  log(x) {
    console.log(x);
  }
  ngOnInit(): void {}
}
