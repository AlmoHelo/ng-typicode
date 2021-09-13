import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/models/post';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit {

  post!: Post;
  id!: number;

  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get("id"))
  }

  ngOnInit(): void {
    this.postService.getPost(this.id).subscribe((onePost: Post) => {
      this.post = onePost;
    })
  }

}
