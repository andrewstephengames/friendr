import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {

  loading: boolean = false;

  posts: any = [];

  constructor(private appService: AppService) {
      this.appService
      .getPosts()
      .pipe(first())
      .subscribe({
      next: (response) => {
        this.loading = false;
        this.posts = response;
      },
      error: (error) => {
        this.loading = false;
        alert(`Posts not found`);
        console.log (`[ERROR]: Posts not found: ${JSON.stringify(error)}`)
      }
    });
  }

  getUser() {}

  getPosts() {
  }
}