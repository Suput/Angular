import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
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
  });
  error = '';
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  make_login(): void {
    let username = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;

    if (username !== null && password !== null) {
      let sign_in = this.auth.sign_in(username, password);
      if (!sign_in) {
        this.error = 'Неверный логин или пароль';
      } else {
        this.router.navigate(['/']);
      }
    }
  }
}
