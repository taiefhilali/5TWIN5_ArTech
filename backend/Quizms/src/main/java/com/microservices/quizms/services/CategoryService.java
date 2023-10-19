package com.microservices.quizms.services;

import com.microservices.quizms.Quizzes.Category;

import java.util.List;
import java.util.Set;

public interface CategoryService {
    public Category addCategory(Category category);
    public Category updateCategory(Category category);
    public List<Category> getCategories();
    public Category getCategory(Long categoryId);
    public void deleteCategory(Long categoryId);
}
