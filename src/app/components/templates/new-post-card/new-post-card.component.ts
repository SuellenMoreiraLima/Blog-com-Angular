import { NewPostFormComponent } from './../new-post-form/new-post-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post-card',
  templateUrl: './new-post-card.component.html',
  styleUrls: ['./new-post-card.component.css']
})
export class NewPostCardComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newPost(){
    this.dialog.open(NewPostFormComponent);
  }

}
