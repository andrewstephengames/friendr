import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  
  constructor(private router: Router) {
      const username = localStorage.getItem('username');
      if (username) {
        this.username = username;
      }
      this.router.navigate(['homepage']);
  }

  signIn() {
    console.log(`[INFO]: ${this.username} has signed in`);
    localStorage.setItem ('username', this.username);
  }
}