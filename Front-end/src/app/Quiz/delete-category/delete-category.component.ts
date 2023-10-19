import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'app/auth/service/category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss'],
  template: `
    <div>
      <p>Are you sure you want to delete this category?</p>
      <button (click)="confirmDelete()">Yes</button>
      <button (click)="cancelDelete()">No</button>
    </div>`
})
export class DeleteCategoryComponent implements OnInit {
  @Input() categoryId: number;

  constructor(private categoryService: CategoryService) {}

  confirmDelete() {
    this.categoryService.deleteCategory(this.categoryId).subscribe(() => {
      
    });
  }

  cancelDelete() {
    // Handle cancellation (e.g., close the dialog)
  }

  ngOnInit(): void {
  }

}
