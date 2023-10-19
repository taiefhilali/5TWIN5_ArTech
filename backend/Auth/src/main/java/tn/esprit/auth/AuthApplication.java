package tn.esprit.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.context.event.EventListener;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.client.RestTemplate;
import tn.esprit.auth.config.KeycloakConfig;
import tn.esprit.auth.config.SecurityConfig;
import tn.esprit.auth.services.EmailSenderService;

@SpringBootApplication
@Import({KeycloakConfig.class,SecurityConfig.class})
@ComponentScan(basePackages = {"tn.esprit.auth.controllers", "tn.esprit.auth.services","tn.esprit.auth.config","tn.esprit.auth.repositories"})
public class AuthApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthApplication.class, args);
    }
    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder){
        return builder.build();
    }



}
