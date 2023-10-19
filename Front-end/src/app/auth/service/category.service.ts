import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category'; // Import your Category model
import { UpdatedCategory } from '../models/updatedCategory';

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

  // // Other methods (update, delete, etc.) can be added here
  // updateCategory(categoryId: number, updatedCategory: UpdatedCategory): Observable<any> {
  //   const url = `${this.apiUrl}/updatecat/${categoryId}`; // Construct the URL for the specific category
  //   return this.http.put(url, updatedCategory);
  // }
  



  deleteCategory(cid: number) {
    return this.http.delete(`${this.apiUrl}/deletecat/${cid}`);
  }



  
  //get the single quiz

  public getCategory(cId){
    return this.http.get(`${this.apiUrl}/getcat/${cId}`);
  }

  public updateCategory(category){
    return this.http.put(`${this.apiUrl}/updatecat`,category);
  }
}