package com.microservices.quizms.Controllers;

import com.microservices.quizms.Quizzes.Category;
import com.microservices.quizms.Quizzes.Quiz;
import com.microservices.quizms.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@RestController
@RequestMapping("/api/quizzes")
@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE}, allowedHeaders = "*")
@Controller
public class QuizController {
    @PersistenceContext
    private EntityManager entityManager;
    @Autowired
    private QuizService quizService;

    //add quiz
    @Transactional
    @PostMapping("/addquiz")

    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz) {
        // Make sure the category is managed
        Category managedCategory = entityManager.merge(quiz.getCategory());
        quiz.setCategory(managedCategory);

        Quiz quiz1 = this.quizService.addQuiz(quiz);
        return ResponseEntity.ok(quiz1);
    }

    //get quiz
    @GetMapping("/{quizId}")
    public Quiz getQuiz(@PathVariable("quizId") Long quizId){

        return this.quizService.getQuiz(quizId);
    }
    //get all quiz
    @GetMapping("/allquiz")
    public ResponseEntity<?> getAllQuizzes(){

        return ResponseEntity.ok(this.quizService.getQuizzes());
    }


    //update Category
    @PutMapping("/updatequiz")
    public Quiz updateQuiz(@RequestBody Quiz quiz){
        return this.quizService.updateQuiz(quiz);

    }

    //delete Category
    @CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*")
    @DeleteMapping("/delete/{quizId}")
    public void deleteQuiz(@PathVariable("quizId") Long quizId){

        this.quizService.deleteQuiz(quizId);
    }
}
