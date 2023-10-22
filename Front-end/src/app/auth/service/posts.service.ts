import { Injectable } from '@angular/core';
import { Posts } from '../models/posts';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})



export class PostsService {

  private currentUser;
  private apiUrl = 'http://localhost:8001/forum-s/api/posts'; // Replace with your API endpoint

  constructor(private http: HttpClient,private _user:UserService,private authService:AuthenticationService) {

    this.authService.currentUser.subscribe((user) => {
      this.currentUser = user;
    });
   }

   
  // Fetch all categories
  getposts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.apiUrl}/allpost/${this.currentUser.username}`);
  }

  // Fetch a post by ID
  getPostById(postId: number): Observable<Posts> {
    const url = `${this.apiUrl}/get/post/${postId}`;
    return this.http.get<Posts>(url);

  }
 

  createPosts(posts: Posts): Observable<Posts> {
    return this.http.post<Posts>(`${this.apiUrl}/add/${this.currentUser.username}`, posts)
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