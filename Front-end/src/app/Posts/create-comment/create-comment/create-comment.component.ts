import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Comments } from 'app/auth/models/Comments';
import { CommentService } from 'app/auth/service/comment.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  commentForm: FormGroup;
  comments: Comments = {
    commentId: 0,
    comment: '',
    name: '',
    email: '',
    dateCommented: new Date(),
  };

  constructor(
    private commentservice: CommentService,
    private fb: FormBuilder,
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private el: ElementRef
  ) {
    this.commentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(4)]],
      comment: ['', [Validators.required, Validators.maxLength(1000), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = +params['postId'];
      console.log('postId from route parameters:', postId);
      // Do something with postId if needed
    });
  }

  onSubmit() {
    console.log('Form Value:', this.commentForm.value);

    if (this.commentForm.valid) {
      this.route.params.subscribe(params => {
        const postId = +params['postId'];
        this.comments = { ...this.comments, ...this.commentForm.value, dateCreated: new Date() };

        this.commentservice.createComments(postId, this.comments).subscribe(
          (newcomment) => {
            if (newcomment) {
              Swal.fire('Success', 'comment added successfully', 'success');
            } else {
              Swal.fire('Error', 'comment could not be added', 'error');
            }
            console.log('comment added successfully.');
          },
          (error) => {
            console.error('Error creating comment:', error);
          }
        );
      });
    } else {
      this.markInvalidFields();
    }
  }

  markInvalidFields() {
    Object.keys(this.commentForm.controls).forEach(fieldName => {
      const control = this.commentForm.get(fieldName);
      if (control.invalid) {
        this.markFieldAsInvalid(fieldName);
        console.log(`${fieldName} is required or invalid.`);
      }
    });
  }

  markFieldAsInvalid(fieldName: string) {
    const inputElement = this.el.nativeElement.querySelector(`[formControlName=${fieldName}]`);
    this.renderer.addClass(inputElement, 'is-invalid');
  }
}

  