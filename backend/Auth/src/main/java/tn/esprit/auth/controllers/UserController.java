package tn.esprit.auth.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tn.esprit.auth.entities.AppUser;
import tn.esprit.auth.entities.LoginRequest;
import tn.esprit.auth.entities.LoginResponse;
import tn.esprit.auth.services.LoginService;
import tn.esprit.auth.services.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    LoginService loginService;


    @PostMapping("/register")
    public ResponseEntity<AppUser> createUser(@RequestBody AppUser userRequest) {
        AppUser result = userService.addUser(userRequest).getBody();
        return ResponseEntity.ok(result);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest){
        return loginService.login(loginRequest);
    }
    @PreAuthorize("#oauth2.hasScope('role:TEACHER') || #oauth2.hasScope('role:USER') ")

    @PutMapping("/update/{id}")
    public ResponseEntity<AppUser> updateUser(@PathVariable Long id, @RequestBody AppUser user) {
        user.setId(id);
        return userService.updateUser(user);
    }
    @PreAuthorize("#oauth2.hasScope('role:TEACHER') || #oauth2.hasScope('role:USER') || #oauth2.hasScope('role:ADMIN')")

    @DeleteMapping("/delete/{username}/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id ,@PathVariable String username) {
        userService.deleteUser(id,username);
        return ResponseEntity.noContent().build();
    }
    @PreAuthorize("#oauth2.hasScope('role:TEACHER') || #oauth2.hasScope('role:USER') || #oauth2.hasScope('role:ADMIN')")

    @GetMapping("/all")
    public ResponseEntity<List<AppUser>> getAllUsers() {
        List<AppUser> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PutMapping("/enableUser")
    public ResponseEntity<AppUser> enableUserByUsername(@RequestBody String username) {
        return userService.enableUserByUsername(username);
    }
    @GetMapping("/{username}")
    public ResponseEntity<AppUser> getUserByUsername(@PathVariable String username) {
        Optional<AppUser> userOptional = userService.getUserByUsername(username);


    @GetMapping("/{username}")
    public ResponseEntity<AppUser> getUserByUsername(@PathVariable String username) {
        Optional<AppUser> userOptional = userService.getUserByUsername(username);


}
