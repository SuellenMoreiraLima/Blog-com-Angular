import { Post } from './../../components/templates/new-post-form/post-form.model';
import { MatDialog } from '@angular/material/dialog';
import { PostServiceService } from './../../services/post-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: Post[];

  constructor(private postService: PostServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((post) => {
      this.posts = post;
    })
  }

  delete(post: Post){
    this.postService.deletePost(`${post.id}`).subscribe(() => {
      this.postService.showMessage("Post deleted!", true);
      this.ngOnInit();
    })
  }

  update(post: Post){
    this.postService.setPost(post);
 // this.dialog.open(EditPostFormComponent)
  }

}
