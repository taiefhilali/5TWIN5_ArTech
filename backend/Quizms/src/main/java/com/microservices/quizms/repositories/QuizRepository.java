package com.microservices.quizms.repositories;

import com.microservices.quizms.Quizzes.Category;
import com.microservices.quizms.Quizzes.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface QuizRepository extends JpaRepository<Quiz,Long> {

    @Query("SELECT p FROM Quiz p WHERE p.userid = :userid ORDER BY p.qId DESC")
    Iterable<Quiz> findQuizzessByUserIdOrderByDesc(@Param("userid") Long userid);
}
