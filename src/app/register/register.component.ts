import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    middlename: new FormControl('', [Validators.maxLength(20)]),
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.maxLength(30),
      Validators.maxLength(300),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(300),
    ]),
    password_again: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(300),
    ]),
    birthdate: new FormControl(''),
    gender: new FormControl(''),
  });

  genders = [
    {
      value: 'man',
      view: 'Мужской',
    },
    {
      value: 'woman',
      view: 'Женский',
    },
  ];
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register(): void {
    let firstname = this.registerForm.controls['firstname'].value;
    let lastname = this.registerForm.controls['lastname'].value;
    let middlename = this.registerForm.controls['middlename'].value;
    if (middlename === null || middlename === '') {
      middlename = 'Нет отчества';
    }

    let pass = this.registerForm.controls['password'].value;
    let passa = this.registerForm.controls['password_again'].value;
    if (pass !== passa) {
      return;
    }

    let email = this.registerForm.controls['email'].value;
    let birthdate = this.registerForm.controls['birthdate'].value;
    let gender = this.registerForm.controls['gender'].value;

    this.auth.register(
      firstname,
      lastname,
      middlename,
      email,
      pass,
      birthdate,
      gender
    );

    this.router.navigate(['/login']);
  }
}
