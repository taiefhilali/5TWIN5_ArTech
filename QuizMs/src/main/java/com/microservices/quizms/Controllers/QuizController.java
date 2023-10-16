package com.microservices.quizms.Controllers;

import com.microservices.quizms.Quizzes.Category;
import com.microservices.quizms.Quizzes.Quiz;
import com.microservices.quizms.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuizController {
    @Autowired
    private QuizService quizService;

    //add quiz
    @PostMapping("/")
    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz){

        Quiz quiz1=this.quizService.addQuiz(quiz);
        return ResponseEntity.ok(quiz1);
    }

    //get quiz
    @GetMapping("/{quizId}")
    public Quiz getQuiz(@PathVariable("quizId") Long quizId){

        return this.quizService.getQuiz(quizId);
    }
    //get all quiz
    @GetMapping("/")
    public ResponseEntity<?> getAllQuizzes(){

        return ResponseEntity.ok(this.quizService.getQuizzes());
    }


    //update Category
    @PutMapping("/")
    public Quiz updateQuiz(@RequestBody Quiz quiz){
        return this.quizService.updateQuiz(quiz);

    }

    //delete Category
    @DeleteMapping("/{quizId")
    public void deleteQuiz(@PathVariable("quizId") Long quizId){
        this.quizService.deleteQuiz(quizId);
    }
}
