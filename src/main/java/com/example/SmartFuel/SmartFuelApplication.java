package com.example.SmartFuel;

import securityconfig.SecurityConfig;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;

import com.example.SmartFuel.User.auth.AuthenticationRequest;
import com.example.SmartFuel.User.auth.AuthenticationService;
import com.example.SmartFuel.User.auth.RegisterRequest;
@ComponentScan(basePackages = {
	    "securityconfig",
	    "com.example.SmartFuel.User.auth"
	})

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
@Import(SecurityConfig.class)
@ComponentScan(basePackages = "securityconfig") 
public class SmartFuelApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmartFuelApplication.class, args);
	}
//	@Bean
//	public CommandLineRunner commandLineRunner(AuthenticationService service) {
//	    return args -> {
//	        AuthenticationRequest loginRequest = new AuthenticationRequest();
//	        loginRequest.setUsername("cherfouq");
//	        loginRequest.setPassword("password");
//	        System.out.println("Access Token: " + service.authenticate(loginRequest).getAccessToken());
//	    };
//	}
}
