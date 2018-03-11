import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  isLiked: boolean;
  
  constructor() { }
  
  ngOnInit() {
  }
  toggleLike(){
    this.isLiked = !this.isLiked;
  }

}
