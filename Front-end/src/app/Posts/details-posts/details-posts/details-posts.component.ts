import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'app/auth/service/posts.service';
import { Posts } from 'app/auth/models/posts';
import { Router } from '@angular/router';
import { Comments } from 'app/auth/models/Comments';
import { CommentService } from 'app/auth/service/comment.service';

@Component({
  selector: 'app-details-posts',
  templateUrl: './details-posts.component.html',
  styleUrls: ['./details-posts.component.scss']
})
export class DetailsPostsComponent implements OnInit {
  post: Posts; 
  comments: Comments[] = []; // Initialize an array to hold comments
  categories = ['ANGULAR', 'SPRINGBOOT', 'REACT', 'LARAVEL'];

  constructor(private postservice: PostsService, private commentService :CommentService,private router: Router,    private route: ActivatedRoute
    ) {
    
    };
  

  ngOnInit() {
    this.route.params.subscribe(params => {
      const postId = +params['postId']; 
      if (!isNaN(postId)) {
        this.postservice.getPostById(postId).subscribe((data) => {
          this.post = data; 

         // Get the comments for the post
         this.commentService.getCommentsByPost(postId).subscribe((comments) => {
          this.comments = comments;
          console.log('Number of comments:', this.comments.length);
        });
      });
      } else {
      }
    });
  }
  
  openUpdateForm(post: Posts) {  
    console.log('Category ID:', post.postId);

    
  }
  
 

}

