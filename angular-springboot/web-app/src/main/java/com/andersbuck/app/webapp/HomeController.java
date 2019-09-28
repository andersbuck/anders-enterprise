package com.andersbuck.app.webapp;

import com.andersbuck.app.webapp.domain.model.User;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for the home module.
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {

    @GetMapping("/home")
    public String home() {
        return "Made it home!";
    }

    @GetMapping("/user")
    public User user() {
        User user = new User();
        user.setId(1L);
        user.setName("David Byrne");
        user.setUsername("tlkHd77");
        user.setEmail("david.byrne@gmail.com");

        System.out.println(user.toString());
        return user;
    }
}