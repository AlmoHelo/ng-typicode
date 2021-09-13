import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../shared/models/comment';
import { CommentService } from '../shared/services/comment.service';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: Comment[] = [];
  id!: number;

  constructor(private commentService: CommentService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get("id"))
  }

  ngOnInit(): void {
    this.commentService.getComments(this.id).subscribe((comments : Comment[]) => {
      this.comments = comments;
    })
  }

}
