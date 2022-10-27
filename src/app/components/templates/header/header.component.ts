import { AboutComponent } from './../about/about.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  about(){
    this.dialog.open(AboutComponent)
  }

}
