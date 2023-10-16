package com.microservices.quizms.repositories;

import com.microservices.quizms.Quizzes.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
