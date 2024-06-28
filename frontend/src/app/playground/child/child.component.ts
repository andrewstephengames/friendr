import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {
  @Input() postInput: any;
  
  likePost() {
    console.log (`[INFO]: You like post '${this.postInput.title}'`);
  }
  
  ngOnInit(){
    console.log (this.postInput);
  }
}
