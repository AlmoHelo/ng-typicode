import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post';
import { User } from '../shared/models/user';
import { PostService } from '../shared/services/post.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  user!: User;
  myUserId!: number;

  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      //Problème d'affichage de tous les users selon le post ! 
      for (let i = 0; i < posts.length; i++) {
        // this.userId = posts[i].userId
        this.userService.getUser(posts[i].userId).subscribe((user: User) => {
          this.user = user;
        })
      }
    })
  }

}
