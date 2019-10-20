package com.andersbuck.app.webapp.domain.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class ClientError {

    private String message;
    private String stack;
}