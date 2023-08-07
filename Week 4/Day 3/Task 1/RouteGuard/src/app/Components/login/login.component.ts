import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // email!: string;
  // password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  // onSubmit() {
  //   // Replace this with actual login validation logic, e.g., using AuthService
  //   if (this.email === 'kunal@example.com' && this.password === 'password') {
  //     this.authService.login();
  //     this.router.navigate(['/home']);
  //   } else {
  //     alert('Invalid credentials. Please try again.');
  //   }
  // }
  onSubmit(){
    this.authService.login();
    this.router.navigate(['/home']);
  }
}
