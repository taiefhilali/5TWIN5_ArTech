package com.microservices.quizms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class QuizMsApplication {

    public static void main(String[] args) {
        SpringApplication.run(QuizMsApplication.class, args);
    }

}
