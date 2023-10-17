import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/auth/service/category.service';
import { Category } from 'app/auth/models/category';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss', '../../../styles.scss'],
})
export class ViewCategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  deleteCategory(cid: number) {
    this.categoryService.deleteCategory(cid).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Category Deleted',
          text: 'Category deleted successfully',
        }).then(() => {
          // Handle success
          this.categories = this.categories.filter((category) => category.cid !== cid);
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error deleting category',
        }).then(() => {
          // Handle errors, e.g., show an error message to the user.
        });
      }
    );
  }

  
  // Navigate to the update category component with the categoryId as a parameter
navigateToUpdateCategory(categoryId: number) {
  this.router.navigate(['/updatecat', categoryId]);
}

  // openUpdateForm(category: Category) {  
  //   // Ensure that the 'category' object has a valid 'id' property
  //   console.log('Category ID:', category.cid);

  //   // Use the 'category.id' when navigating to the update category component
  //   this.router.navigate(['/updatecat', category.cid]);
  // }
  
 

}
