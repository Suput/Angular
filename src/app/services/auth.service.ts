import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  is_logged: boolean = false;
  username: string = '';
  constructor() {}

  sign_in(username: string, password: string): boolean {
    let check = localStorage.getItem(username);
    if (check === null || check === undefined){
      return false;
    }

    let user = JSON.parse(check);
    if (password !== user.password) {
      return false;
    }

    this.is_logged = true;
    this.username = username;

    return true;
  }

  logout(): void {
    this.is_logged = false;
    this.username = '';
  }

  get_logged(): boolean {
    return this.is_logged;
  }

  get_username(): string {
    return this.username;
  }

  register(
    firstname: any,
    lastname: any,
    middlename: any,
    email: any,
    password: any,
    birthdate: any,
    gender: any
  ): void {
    let user = {
      firstname: firstname,
      lastname: lastname,
      middlename: middlename,
      email: email,
      password: password,
      birthdate: birthdate,
      gender: gender,
    };
    let user_str = JSON.stringify(user);
    localStorage.setItem(email, user_str);
  }
}
