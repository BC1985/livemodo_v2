import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
// import * as _moment from 'moment';
// import { defaultFormat as _rollupMoment } from 'moment';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  // providers: [
  //   {
  //     provide: DateAdapter,
  //     useClass: MomentDateAdapter,
  //     deps: [MAT_DATE_LOCALE],
  //   },
  //   { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  // ],
})
// const moment = _rollupMoment || _moment;
export class DatepickerComponent implements OnInit {
  // date = new FormControl(_moment([2017, 0, 1]));
  date = new FormControl(_moment().utc().format('dddd, MMMM Do, YYYY'));
  ngOnInit(): void {}
}
