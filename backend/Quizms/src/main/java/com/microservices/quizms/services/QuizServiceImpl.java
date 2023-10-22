package com.microservices.quizms.services;

import com.microservices.quizms.Quizzes.AppUser;
import com.microservices.quizms.Quizzes.Quiz;
import com.microservices.quizms.repositories.QuizRepository;
import com.microservices.quizms.repositories.UserClient;
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

    @Autowired
    private UserClient userClient;
    /*@Override
    @Transactional

    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }*/

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

@Override
    public Quiz addQuizz(Quiz quiz, String username) {
        try {
            AppUser user = userClient.getUserByUsername(username);


            //post.setUser(post.getUser());
            quiz.setUserid(user.getId());
            quiz.setUser(user);
            return this.quizRepository.save(quiz);
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace(); // Change this to use your logger
            throw new RuntimeException("Error creating post", e);
        }

}
@Override
    public Iterable<Quiz> getQuizzesByUserIdOrderByDesc(Long userid) {
        return quizRepository.findQuizzessByUserIdOrderByDesc(userid);
    }
}
