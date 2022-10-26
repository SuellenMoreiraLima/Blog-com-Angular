import { Post } from './../components/templates/new-post-form/post-form.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  public baseUrl: string = "http://localhost:3001/posts"

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  newPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post);
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'close', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['meg-success']

    })
  }
}
