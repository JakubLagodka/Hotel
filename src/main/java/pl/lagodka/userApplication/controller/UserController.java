package pl.lagodka.userApplication.controller;

import pl.lagodka.userApplication.model.User;
import pl.lagodka.userApplication.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @GetMapping("/get")
    public ResponseEntity<List<User>> fetchUsers(String username){
        return ResponseEntity.ok(userService.findAllUsers(username));
    }
    @PostMapping("/post")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }
}
