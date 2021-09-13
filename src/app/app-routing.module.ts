import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  // Redirection
  { path: "", redirectTo: "user", pathMatch: "full" },
  {
    path: "users", children: [
      { path: "", component: UserListComponent, pathMatch: "full" },
      { path: "add", component: UserAddComponent, pathMatch: "full" }
    ]
  },
  { path: "posts", component: PostListComponent },
  { path: "posts/:id", component: PostSingleComponent },
  { path: "posts/:id/comments", component: CommentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
