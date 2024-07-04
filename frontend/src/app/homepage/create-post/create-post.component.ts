import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})

export class CreatePostComponent {
  // title: string = '';
  // description: string = '';
  // loading: boolean = false;
  
  // constructor(private router: Router, private appService: AppService) {
  // }

  // signIn() {
  //   this.loading = true;
  //   this.appService
  //     .getUserByUsername(this.username)
  //     .pipe(first())
  //     .subscribe({
  //     next: (response) => {
  //       this.loading = false;
	// 			localStorage.setItem ('firstName', response?.firstName);
	// 			localStorage.setItem ('lastName', response?.lastName);
	// 			localStorage.setItem ('username', this.username);
  //       console.log(`[INFO]: User ${this.username} signed in`);
  //       this.router.navigate(['homepage']);
  //     },
  //     error: (error) => {
  //       this.loading = false;
  //       alert(`Username not found`);
  //       console.log (`[ERROR]: Username not found: ${JSON.stringify(error)}`)
  //     }
  //   });
  // }

}
