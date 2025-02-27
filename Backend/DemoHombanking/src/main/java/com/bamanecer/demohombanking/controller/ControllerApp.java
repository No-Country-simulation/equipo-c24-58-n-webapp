package com.bamanecer.demohombanking.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
public class ControllerApp {

    @GetMapping("/")
    public String home() {

        return "Hello World";
    }

    @PostMapping("/")
    public String goodbye() {
        return "Goodbye World";
    }
    @DeleteMapping ()
    public String delet() {

}

}
