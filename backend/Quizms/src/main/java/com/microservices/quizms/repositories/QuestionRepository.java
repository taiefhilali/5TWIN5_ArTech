package com.microservices.quizms.repositories;

import com.microservices.quizms.Quizzes.Category;
import com.microservices.quizms.Quizzes.Question;
import com.microservices.quizms.Quizzes.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    Set<Question> findByQuiz(Quiz quiz);

}
