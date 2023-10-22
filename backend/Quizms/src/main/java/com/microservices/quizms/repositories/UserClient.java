package com.microservices.quizms.repositories;

import com.microservices.quizms.Quizzes.AppUser;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "auth-s", url = "http://localhost:8070/auth-s")

public interface UserClient {

    @GetMapping("/user/{username}")
    AppUser getUserByUsername(@PathVariable String username);

}
