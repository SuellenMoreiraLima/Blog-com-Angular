import { NewPostCardComponent } from './components/templates/new-post-card/new-post-card.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NewPostFormComponent } from './components/templates/new-post-form/new-post-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewPostActionsComponent } from './components/templates/new-post-actions/new-post-actions.component';
import { PostsComponent } from './views/posts/posts.component';
import { PostsButtonComponent } from './views/posts-button/posts-button.component';
import { AboutComponent } from './components/templates/about/about.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavInfoComponent } from './components/templates/sidenav-info/sidenav-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewPostFormComponent,
    NewPostCardComponent,
    NewPostActionsComponent,
    PostsComponent,
    PostsButtonComponent,
    AboutComponent,
    SidenavInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
