package tn.esprit.forumintelipath.Dao;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import tn.esprit.forumintelipath.Entity.AppUser;

@FeignClient(name = "auth-s", url = "http://localhost:8070/auth-s")

public interface UserClient {

    @GetMapping("/user/{username}")
     AppUser getUserByUsername(@PathVariable String username);

}
