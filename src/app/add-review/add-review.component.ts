import { Component, OnInit } from '@angular/core';
import { Review } from '../Models/Review';
import * as _moment from 'moment';
import { ReviewService } from '../../services/review.service';
import { FormGroup, FormBuilder, Validators,} from '@angular/forms';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
  providers: [{
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AddReviewComponent implements OnInit {
  addReviewForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.addReviewForm = this.formBuilder.group({
      performer: ['', Validators.required],
      showDate: [_moment(), Validators.required],
      venue: ['', Validators.required],
      content: ['', Validators.required],
      rating: ['', Validators.required],
      tagline:['']
    });
  }
  postReview() {
    const {
      performer,
      tagline,
      content,
      showDate,
      venue,
      rating,
    } = this.addReviewForm.controls;

    var review = new Review();
    
    review.Performer = performer.value;
    review.ShowDate = _moment(showDate.value._d).format('MMMM Do, YYYY');
    review.Venue = venue.value;
    review.Content = content.value;
    review.Rating = rating.value;
    review.Tagline = tagline.value;
    console.log(review.ShowDate, review.Venue, review.Performer, review.Content, review.Tagline, review.Rating);
    
    this._reviewService.postReview(review).subscribe((data) => {
      review = data;
    });
  }
  get input() {
    return this.addReviewForm.controls;
  }

  log(x) {
    console.log(x);
  }
  onSubmit() {
    this.postReview()
    this.submitted = true;
  }
}
