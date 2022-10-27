import { NewPostActionsComponent } from './../new-post-actions/new-post-actions.component';
import { PostServiceService } from './../../../services/post-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Post } from './post-form.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post-form',
  templateUrl: './new-post-form.component.html',
  styleUrls: ['./new-post-form.component.css']
})
export class NewPostFormComponent implements OnInit {

  disabled = true;
  post: Post = {
    user: "",
    title: "",
    postContent: "",
  }

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<NewPostFormComponent>,
    private postService: PostServiceService,

  ) { }

  ngOnInit() { }

  publish() {
    this.postService.newPost(this.post).subscribe(() => {
      this.dialog.closeAll();
      this.postService.showMessage("New post added", true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
  }

  cancel() {
    if (this.post.postContent != "") {
      this.dialog.open(NewPostActionsComponent);
    } else {
      this.dialogRef.close();
    }
  }

}
