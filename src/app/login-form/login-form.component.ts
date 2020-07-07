import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { Login } from '../Models/Login';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  
  constructor(private _authService: AuthService, private _router: Router) {}

  loginCredentials = new Login();
  submitted = false
  error = false

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true
    this._authService
      .login(this.loginCredentials.Username, this.loginCredentials.Password)
      .subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.token)
          this._router.navigate(['/post'])
        },
        err => {
          console.log(err.message);
          this.error = true
        }
      );
  }
}
