import { PostServiceService } from './../../../services/post-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post-actions',
  templateUrl: './new-post-actions.component.html',
  styleUrls: ['./new-post-actions.component.css']
})
export class NewPostActionsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<NewPostActionsComponent>,
    private postService:PostServiceService
  ) { }

  ngOnInit(): void {
  }

  discard(){
    this.dialog.closeAll();
    this.postService.showMessage("Chances discard", false);
  }

  back(){
    this.dialogRef.close;
  }

}
