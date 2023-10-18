import { Injectable } from '@angular/core';
import { Posts } from '../models/posts';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Comments } from '../models/Comments';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'http://localhost:8001/api/posts'; // Replace with your API endpoint

  constructor(private http: HttpClient) {
   }

   
  // Fetch all categories
  getposts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.apiUrl}/allpost`);
  }

  // Fetch a post by ID
  getPostById(postId: number): Observable<Posts> {
    const url = `${this.apiUrl}/get/post/${postId}`;
    return this.http.get<Posts>(url);

  }
 

  createPosts(posts: Posts): Observable<Posts> {
    return this.http.post<Posts>(`${this.apiUrl}/`, posts)
       .pipe(
          catchError((error: any) => {
             console.error('Error:', error);
             throw error;
          })
       );
 }
 showPostsByCategory(category: string): Observable<Posts[]> {
  const url = `${this.apiUrl}/get/category/${category}`;
  return this.http.get<Posts[]>(url);
}

}