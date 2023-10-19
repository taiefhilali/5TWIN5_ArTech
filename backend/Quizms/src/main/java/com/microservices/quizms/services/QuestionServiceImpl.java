package com.microservices.quizms.services;

import com.microservices.quizms.Quizzes.Question;
import com.microservices.quizms.Quizzes.Quiz;
import com.microservices.quizms.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
@Service

public class QuestionServiceImpl implements  QuestionService{

   @Autowired
   private QuestionRepository questionRepository;
    @Override
    public Question addQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Set<Question> getQuestions() {
        return new HashSet<>(this.questionRepository.findAll());
    }

    @Override
    public Question getQuestion(Long questionId) {
        return this.questionRepository.findById(questionId).get();
    }

    @Override
    public Set<Question> getQuestionsofQuiz(Quiz quiz) {
        return this.questionRepository.findByQuiz(quiz);
    }
    @Override
    public void deleteQuestion(Long questionId) {
     Question question=new Question();
     question.setqId(questionId);
     this.questionRepository.delete(question);
    }
}
