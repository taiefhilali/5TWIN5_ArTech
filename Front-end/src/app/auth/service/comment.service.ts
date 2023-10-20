import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Comments } from '../models/Comments';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private Url = 'http://localhost:8001/api/comment'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  createComments(postId: number, comments: Comments): Observable<Comments> {
    return this.http.post<Comments>(`${this.Url}/add/${postId}`, comments)
      .pipe(
        catchError((error: any) => {
          console.error('Error:', error);
          throw error;
        })
      );
  }
  // Fetch a post by ID
  getCommentsByPost(postId: number): Observable<Comments[]> {
    const url = `${this.Url}/get/post/${postId}`;
    return this.http.get<Comments[]>(url);
  }
 
}