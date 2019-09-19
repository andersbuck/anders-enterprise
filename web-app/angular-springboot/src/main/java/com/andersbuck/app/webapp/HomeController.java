package com.andersbuck.app.webapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for the home module.
 */
@RestController
public class HomeController {

    @GetMapping("/home")
    public String home() {
        return "Made it home!";
    }
}