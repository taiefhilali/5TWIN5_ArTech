import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import the necessary modules
import { Renderer2, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { Category } from 'app/auth/models/category';
import { CategoryService } from 'app/auth/service/category.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss', '../../../@core/scss/base/bootstrap.scss']
})
export class AddCategoryComponent {
  categoryForm: FormGroup; // Declare a FormGroup for your form
  category: Category = { cid:0,title: '', description: '' };

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private renderer: Renderer2, private el: ElementRef ) {
    // Initialize the form with validation rules
    this.categoryForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(255),Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.maxLength(1000),Validators.minLength(10)]]
    });
  }

  addCategory() {
    if (this.categoryForm.valid) {
      this.category.title = this.categoryForm.value.title;
      this.category.description = this.categoryForm.value.description;
  
      this.categoryService.createCategory(this.category).subscribe((newCategory) => {

        if (newCategory) {
          Swal.fire('Success', 'Category added successfully', 'success');
        } else {
          Swal.fire('Error', 'Category could not be added', 'error');
        }
        // Handle success here
        console.log('Category added successfully.');
      });
    } else {
      if (this.categoryForm.get('title').hasError('required')) {
        this.markFieldAsInvalid('title');
        console.log('Title is required.');
      }
  
      if (this.categoryForm.get('title').hasError('maxlength')) {
        this.markFieldAsInvalid('title');
        console.log('Title is too long.');
      }
  
      if (this.categoryForm.get('description').hasError('required')) {
        this.markFieldAsInvalid('description');
        console.log('Description is required.');
      }
  
      if (this.categoryForm.get('description').hasError('maxlength')) {
        this.markFieldAsInvalid('description');
        console.log('Description is too long.');
      }
    }
  }
  
  markFieldAsInvalid(fieldName: string) {
    const inputElement = this.el.nativeElement.querySelector(`[formControlName=${fieldName}]`);
    this.renderer.addClass(inputElement, 'is-invalid');
  }
  
}
