package com.microservices.quizms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class QuizmsApplication {

    public static void main(String[] args) {
        SpringApplication.run(QuizmsApplication.class, args);
    }

}
