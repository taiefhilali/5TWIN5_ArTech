import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import the necessary modules
import { Posts } from 'app/auth/models/posts';
import { Categories } from 'app/auth/models/Categories';
import { PostsService } from 'app/auth/service/posts.service';
import { Renderer2, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss']
})
export class CreatePostsComponent  {
  PostForm: FormGroup;
   post: Posts = {
    postId: 0,
    postTitle: '',
    voteCount: 0, 
    postDescription: '',
    category: Categories.ANGULAR, 
    
    dateCreated: new Date(),
  };

  //enum property
  categories = Object.values(Categories); // Get enum values
  currentDate: Date = new Date();

  constructor(private postsservice: PostsService, private fb: FormBuilder, private renderer: Renderer2, private el: ElementRef) { 
    this.PostForm = this.fb.group({
      postTitle: ['', [Validators.required, Validators.maxLength(255),Validators.minLength(4)]],
      postDescription: ['', [Validators.required, Validators.maxLength(1000),Validators.minLength(10)]],
      category: [Categories.ANGULAR, Validators.required], // Set up category as a dropdown with ANGULAR as the default

    });
  }
  onCategoryChange(category: any) {
    console.log('Selected Category:', category);
  }
  addPost() {
      console.log('Form Value:', this.PostForm.value);

    if (this.PostForm.valid) {
      this.post.postTitle = this.PostForm.value.postTitle;
      this.post.postDescription = this.PostForm.value.postDescription;
      console.log('Selected Category:', this.PostForm.value.category);

      this.post.category = this.PostForm.value.category;
      
      this.post.dateCreated = new Date();



      this.postsservice.createPosts(this.post).subscribe((newpost) => {

        if (newpost) {
          Swal.fire('Success', 'post added successfully', 'success');
        } else {
          Swal.fire('Error', 'post could not be added', 'error');
        }
        // Handle success here
        console.log('post added successfully.');
      });
    } else {
      if (this.PostForm.get('postTitle').hasError('required')) {
        this.markFieldAsInvalid('postTitle');
        console.log('postTitle is required.');
      }
  
      if (this.PostForm.get('postTitle').hasError('maxlength')) {
        this.markFieldAsInvalid('postTitle');
        console.log('postTitle is too long.');
      }
  
      if (this.PostForm.get('postDescription').hasError('required')) {
        this.markFieldAsInvalid('postDescription');
        console.log('postDescription is required.');
      }
  
      if (this.PostForm.get('postDescription').hasError('maxlength')) {
        this.markFieldAsInvalid('postDescription');
        console.log('postDescription is too long.');
      }
    }
  }
  
  markFieldAsInvalid(fieldName: string) {
    const inputElement = this.el.nativeElement.querySelector(`[formControlName=${fieldName}]`);
    this.renderer.addClass(inputElement, 'is-invalid');
  }
  
}
