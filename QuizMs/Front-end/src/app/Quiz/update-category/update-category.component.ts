import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'app/auth/service/category.service';
import { Category } from 'app/auth/models/category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements OnInit {

  cId=0;
  category;

  // categoryForm: FormGroup;
  // category: Category;
  // categoryId: number; // Define the categoryId property


  constructor(
    
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}


  ngOnInit(): void {
    this.cId=this.route.snapshot.params.cid;
    this.categoryService.getCategory(this.cId).subscribe((data:any) => {
    this.category=data;
   
    }, (error)=>{
      console.log('error');
    
    });
  }

    public updateData(){
      //validate
    
      this.categoryService.updateCategory(this.category).subscribe((data) => {
    
        Swal.fire("Success!!",'Updated','success');
      },(error)=>{
        Swal.fire("Error!!",' Not Updated','error');
      });
    }
    }
  // ngOnInit(): void {
  //   this.categoryId = +this.route.snapshot.paramMap.get('cid'); // Assuming 'id' is the route parameter name
  //   if (this.categoryId) {
  //     this.categoryService.getCategory(this.categoryId).subscribe((category: Category) => {
  //       this.categoryForm.patchValue(category);
  //     });    }
  //   this.categoryForm = this.formBuilder.group({
  //     title: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(4)]],
  //     description: ['', [Validators.required, Validators.maxLength(1000), Validators.minLength(10)]],})
  //     // Add other form controls as needed
  //     this.route.params.subscribe((params) => {
  //       this.categoryId = params['id']; // Use 'id' to match the route parameter
  //       this.categoryService.getCategory(this.categoryId).subscribe((category) => {
  //         this.category = category;
  //         this.initializeForm();
  //       });
  //     });
      
      
   
  // }

  // initializeForm() {
  //   this.categoryForm = this.formBuilder.group({
  //     title: [this.category.title, [Validators.required, Validators.maxLength(255), Validators.minLength(4)]],
  //     description: [
  //       this.category.description,
  //       [Validators.required, Validators.maxLength(1000), Validators.minLength(10)],
  //     ],
  //     // Add other form controls as needed
  //   });
  // }

  // updateCategory() {
  //   if (this.categoryForm.valid) {
  //     const updatedCategory: Category = this.categoryForm.value;
  //     this.categoryService.updateCategory(this.categoryId, updatedCategory).subscribe((response) => {
  //       // Handle success or error here
  //       console.log('Category updated:', response);
  //     });
  //   } else {
  //     // Handle form validation errors
  //     console.log('Form is invalid. Please correct the errors.');
  //   }
  // }
  

