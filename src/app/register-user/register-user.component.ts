import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
          ),
        ],
      ],
      repeatPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'
          ),
        ],
      ],
    });
  }
  get input() {
    return this.registerForm.controls;
  }

  disableButton() {
    const {
      email,
      firstName,
      lastName,
      username,
      password,
      repeatPassword,
    } = this.registerForm.value;
    if (
      email == '' ||
      firstName == '' ||
      lastName == '' ||
      password == '' ||
      repeatPassword == '' ||
      username == ''
    ) {
      return true;
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }
}
