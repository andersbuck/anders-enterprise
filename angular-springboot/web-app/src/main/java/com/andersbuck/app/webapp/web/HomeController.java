package com.andersbuck.app.webapp.web;

import com.andersbuck.app.webapp.domain.models.User;
import com.andersbuck.app.webapp.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for the home module.
 */
@RestController
public class HomeController {

    @Autowired
    private UserService userSrv;

    @GetMapping("/home")
    public String home() {
        return "Made it home!";
    }

    @GetMapping("/user")
    public User user() {
        return userSrv.fetchUser(1L);
    }

    @GetMapping("/causeerror")
    public void causeError() {
        System.out.println("error");
        throw new IllegalArgumentException("whoops");
    }
}