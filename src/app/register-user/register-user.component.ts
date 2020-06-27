import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../Models/User';
import { UserService } from '../../services/userService';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _userService: UserService
  ) {}

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
  registerNewUser() {
    const {
      email,
      firstName,
      lastName,
      username,
      password,
    } = this.registerForm.controls;
    var user = new User();
      user.Email = email.value;
      user.FirstName = firstName.value;
      user.LastName = lastName.value;
      user.Password = password.value;
      user.Username = username.value;
      console.log(user)
    // import post user service
    this._userService.postUser(user).subscribe((data) => {
      user = data;
    });
    console.log('user submitted');
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
      repeatPassword != password ||
      username == ''
    ) {
      return true;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.registerNewUser();
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }
}
