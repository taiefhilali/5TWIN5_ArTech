import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category'; // Import your Category model

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:8099/api/categories'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Fetch all categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}`);
  }

  // Create a new category
  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}/addcat`, category);
  }

  // Other methods (update, delete, etc.) can be added here
  updateCategory(categoryId: number, updatedCategory: Category): Observable<Category> {
    const url = `${this.apiUrl}/updatecat`;  // Use the correct URL for your Spring Boot endpoint
    return this.http.put<Category>(url, updatedCategory);
  }
  

  deleteCategory(categoryId: number): Observable<void> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.delete<void>(url);
  }

  getCategory(categoryId: number): Observable<Category> {
    const url = `${this.apiUrl}/${categoryId}`;
    return this.http.get<Category>(url);
  }
}