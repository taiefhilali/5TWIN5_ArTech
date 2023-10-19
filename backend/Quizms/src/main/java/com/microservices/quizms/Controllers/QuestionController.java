package com.microservices.quizms.Controllers;

import com.microservices.quizms.Quizzes.Category;
import com.microservices.quizms.Quizzes.Question;
import com.microservices.quizms.Quizzes.Quiz;
import com.microservices.quizms.services.QuestionService;
import com.microservices.quizms.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/questions")
@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE}, allowedHeaders = "*")
public class QuestionController {
    @Autowired
    private QuestionService questionService;
    @Autowired
    private QuizService quizService;
    //add question
    @PostMapping(value = "/addquestion", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Question> addQuestion(@RequestBody Question question){

        Question question1=this.questionService.addQuestion(question);
        return ResponseEntity.ok(question1);
    }

    //get category
    @GetMapping("/{questionid}")
    public Question getQuestion(@PathVariable("questionid") Long questionid){

        return this.questionService.getQuestion(questionid);
    }
    //get all category
    @GetMapping("/")
    public ResponseEntity<?> getAllQuestion(){

        return ResponseEntity.ok(this.questionService.getQuestions());
    }


    //update Category
    @PutMapping("/")
    public Question updateQuestion(@RequestBody Question question){
        return this.questionService.updateQuestion(question);

    }

    //get all question qb quizz
    @CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, allowedHeaders = "*")
    @GetMapping("/quiz/{quizId}")
    public ResponseEntity<?> getQuestionsofQuiz(@PathVariable("quizId") long quizId) {
        Quiz quiz = this.quizService.getQuiz(quizId);

        // Check if the numberofQuestions is a valid integer
        int numQuestions = 0;
        try {
            numQuestions = Integer.parseInt(quiz.getNumberofQuestions());
        } catch (NumberFormatException e) {
            // Handle the case where the numberofQuestions is not a valid integer
            return ResponseEntity.badRequest().body("Invalid numberofQuestions value");
        }

        Set<Question> questions = quiz.getQuestions();
        List list = new ArrayList<>(questions);

        // Check if the list size exceeds the numberofQuestions
        if (list.size() > numQuestions) {
            list = list.subList(0, numQuestions);
        }

        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }

    @GetMapping ("/quiz/all/{quizId}")
    public ResponseEntity<?> getQuestionsAllofQuiz(@PathVariable("quizId") long quizId){

       Quiz quiz=new Quiz();
        quiz.setqId(quizId);
        Set<Question> questionsofquiz=this.questionService.getQuestionsofQuiz(quiz);
        return ResponseEntity.ok(questionsofquiz);

    }

    //get single question
    @GetMapping("/{questionId}")
    public Question get(@PathVariable("questionId") Long questionId){

        return this.questionService.getQuestion(questionId);
    }

    //delete single question
    @DeleteMapping("/{questionId}")

    public void delete(@PathVariable("questionId") Long questionId){

         this.questionService.deleteQuestion(questionId);
    }

}

