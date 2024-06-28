import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  posts: any = [
    {
      id: 1,
      user_id: 10,
      date: 'Date Fri Jun 28 2024 11:45:43 GMT+0300 (Eastern European Summer Time)',
      title: 'post 1',
      description: 'This is my first post',
    },
    {
      id: 2,
      user_id: 10,
      date: 'Date Fri Jun 28 2024 11:45:44 GMT+0300 (Eastern European Summer Time)',
      title: 'post 2',
      description: 'This is my second post',
    },
    {
      id: 3,
      user_id: 10,
      date: 'Date Fri Jun 28 2024 11:45:45 GMT+0300 (Eastern European Summer Time)',
      title: 'post 3',
      description: 'This is my third post',
    },
  ];
  title: string = '';
  description: string = '';
  
  // create new object in post array
  createPost() {
      this.posts.push({
        id: Math.floor(Math.random()*100),
        date: new Date(),
        title: this.title,
        description: this.description
      });
  }
  
}
