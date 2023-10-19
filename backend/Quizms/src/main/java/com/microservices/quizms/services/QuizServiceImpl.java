package com.microservices.quizms.services;

import com.microservices.quizms.Quizzes.Quiz;
import com.microservices.quizms.repositories.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.HashSet;
import java.util.Set;

@Service
public class QuizServiceImpl implements QuizService{

   @Autowired
   private QuizRepository quizRepository;
    @Override
    @Transactional

    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }


    @Override
    public Quiz updateQuiz(Quiz quiz) {

        return this.quizRepository.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizzes() {
        return new HashSet<>(this.quizRepository.findAll());
    }

    @Override
    public Quiz getQuiz(Long quizId) {
        return this.quizRepository.findById(quizId).get();
    }

    @Override
    @CrossOrigin(origins = "*")
    public void deleteQuiz(Long quizId) {

        this.quizRepository.deleteById(quizId);
    }
}
