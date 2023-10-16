package com.microservices.quizms.Controllers;

import com.microservices.quizms.Quizzes.Category;
import com.microservices.quizms.Quizzes.Question;
import com.microservices.quizms.Quizzes.Quiz;
import com.microservices.quizms.services.QuestionService;
import com.microservices.quizms.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {
    @Autowired
    private QuestionService questionService;
    @Autowired
    private QuizService quizService;
    //add question
    @PostMapping("/")
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
    @GetMapping ("/quiz/{quizId")
    public ResponseEntity<?> getQuestionsofQuiz(@PathVariable("quizId") long quizId){

    /*    Quiz quiz=new Quiz();
        quiz.setqId(quizId);
        Set<Question> questionsofquiz=this.questionService.getQuestionsofQuiz(quiz);
        return ResponseEntity.ok(questionsofquiz);*/
Quiz quiz=this.quizService.getQuiz(quizId);
Set<Question> questions=quiz.getQuestions();
        List list=new ArrayList<>(questions);
        if(list.size()>Integer.parseInt((quiz.getNumberofQuestions())))

        {
            list=list.subList(0,Integer.parseInt((quiz.getNumberofQuestions()+1)));

        }
        Collections.shuffle(list);
        return  ResponseEntity.ok(list);
    }

    //get single question
    @GetMapping("/{questionId")
    public Question get(@PathVariable("questionId") Long questionId){

        return this.questionService.getQuestion(questionId);
    }

    //delete single question
    @DeleteMapping("/{questionId")

    public void delete(@PathVariable("questionId") Long questionId){

         this.questionService.deleteQuestion(questionId);
    }

}

