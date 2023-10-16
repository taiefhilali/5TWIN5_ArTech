import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from 'app/auth/service/category.service';
import { Category } from 'app/auth/models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss','../../../styles.scss']
})
export class ViewCategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService,  private router: Router) {
    const categoryId = 1;
    this.categoryService.getCategory(categoryId).subscribe((category) => {
      // Handle the retrieved category here
      console.log('Retrieved category:', category);
    });
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  
  openUpdateForm(category: Category) {  
    // Ensure that the 'category' object has a valid 'id' property
    console.log('Category ID:', category.cid);

    // Use the 'category.id' when navigating to the update category component
    this.router.navigate(['/updatecat', category.cid]);
  }
  
 

}
