package com.andersbuck.app.webapp.web;

import com.andersbuck.app.webapp.domain.models.ClientError;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for the home module.
 */
@RestController
public class LoggingController {

    @PostMapping("/log-error")
    public void logError(@RequestBody ClientError clientError) {
        System.out.println("Logging the error");
        System.out.println(clientError.getMessage());
    }
    
}