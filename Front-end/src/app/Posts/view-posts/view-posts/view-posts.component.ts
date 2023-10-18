import { Component, OnInit } from '@angular/core';
import { Posts } from 'app/auth/models/posts';
import { PostsService } from 'app/auth/service/posts.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit {
  posts: Posts[] = [];
  allPosts: Posts[] = [];  // Maintain a copy of all posts
  categories = ['ANGULAR', 'SPRINGBOOT', 'REACT', 'LARAVEL'];
  selectedCategory: string | null = null;

  blogListRef: { categories: string[] } = { categories: ['ANGULAR', 'SPRINGBOOT', 'REACT', 'LARAVEL'] };

  constructor(private postsservice: PostsService) { }

  ngOnInit(): void {
    this.postsservice.getposts().subscribe((data) => {
      this.posts = data;
      this.allPosts = data;  // Store all posts for resetting
    });
  }

  filterPostsByCategory(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toUpperCase();
  
    if (searchTerm) {
      this.posts = this.allPosts.filter(post => post.category.toUpperCase().includes(searchTerm));
    } else {
      // If no search term, show all posts
      this.posts = this.allPosts.slice(); // Reset to all posts
    }
  }
  
}
