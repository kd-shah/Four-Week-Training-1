import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;

  login() {
    this.loggedIn = true;
  }

  isAuthenticated() {
    return this.loggedIn

  }
  constructor() { }
}
