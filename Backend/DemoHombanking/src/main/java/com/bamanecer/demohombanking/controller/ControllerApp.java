package com.bamanecer.demohombanking.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerApp {

    @GetMapping("equipo-c24-58-n-webapp/front/index.html")
    public String home() {
        return "Hello World";
    }
}
