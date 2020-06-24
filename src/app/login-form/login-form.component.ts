import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Review } from '../Models/Review';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');

  onSubmit() {
    console.log('submitted');
  }
  ngOnInit(): void {}
}
