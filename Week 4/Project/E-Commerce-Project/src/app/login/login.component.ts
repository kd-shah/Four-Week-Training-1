import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';  //reactive


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router){}
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email],  ),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  
  onSubmit(){
    console.warn(this.login.value)
    this.authService.login();
    this.router.navigate(['/products'])
  }
  get user(){
    return this.login.get('user')
  }
  get password(){
    return this.login.get('password')
  }
}
