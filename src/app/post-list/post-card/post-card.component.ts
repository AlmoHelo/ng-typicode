import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post!: Post;
  @Input() user!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
