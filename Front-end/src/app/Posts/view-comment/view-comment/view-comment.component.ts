import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'app/auth/models/Comments';
import { CommentService } from 'app/auth/service/comment.service';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.scss']
})

export class ViewCommentComponent implements OnInit {
  postId: number;
  comments: Comments[] = []; // Initialize an array to hold comments
  
  categories = ['ANGULAR', 'SPRINGBOOT', 'REACT', 'LARAVEL'];

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['postId'];
      if (!isNaN(this.postId)) {
        this.getCommentsForPost(this.postId);
      } else {
        console.error('Invalid postId:', params['postId']);
      }
    });
  }

  getCommentsForPost(postId: number): void {
    this.commentService.getCommentsByPost(postId).subscribe(
      (comments) => {
        this.comments = comments; // Assign fetched comments to the component property
        console.log('Comments:', this.comments);
        // Do something with the comments
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  
}