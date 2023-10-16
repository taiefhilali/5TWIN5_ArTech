package com.microservices.quizms.services;

import com.microservices.quizms.Quizzes.Category;
import com.microservices.quizms.Quizzes.Question;
import com.microservices.quizms.Quizzes.Quiz;

import java.util.Set;

public interface QuestionService {
    public Question addQuestion(Question question);
    public Question updateQuestion(Question question);
    public Set<Question> getQuestions();
    public Question getQuestion(Long questionId);
    public Set<Question> getQuestionsofQuiz(Quiz quiz);
    public void deleteQuestion(Long questionId);

}

