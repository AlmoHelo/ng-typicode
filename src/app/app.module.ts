import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-list/post-card/post-card.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentCardComponent } from './comment-list/comment-card/comment-card.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCardComponent,
    NavBarComponent,
    PostListComponent,
    PostCardComponent,
    PostSingleComponent,
    CommentListComponent,
    CommentCardComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
