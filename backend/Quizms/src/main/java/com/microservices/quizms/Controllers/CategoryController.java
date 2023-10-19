package com.microservices.quizms.Controllers;

import com.microservices.quizms.Quizzes.Category;
import com.microservices.quizms.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE}, allowedHeaders = "*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;
    //add category
    @PostMapping("/addcat")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){

    Category category1=this.categoryService.addCategory(category);
    return ResponseEntity.ok(category1);
    }

    //get category
    @GetMapping("/getcat/{categoryId}")
    public Category getCategory(@PathVariable("categoryId") Long categoryId){

        return this.categoryService.getCategory(categoryId);
    }
    //get all category
    @GetMapping
    public ResponseEntity<?> getAllCategory(){

        return ResponseEntity.ok(this.categoryService.getCategories());
    }


    //update Category
    @PutMapping("/updatecat")
    public Category updateCategory(@RequestBody Category category){
        return this.categoryService.updateCategory(category);

    }

    //delete Category
@DeleteMapping("/deletecat/{categoryId}")
    public void deleteCategory(@PathVariable("categoryId") Long categoryId){
   this.categoryService.deleteCategory(categoryId);
    }



}
