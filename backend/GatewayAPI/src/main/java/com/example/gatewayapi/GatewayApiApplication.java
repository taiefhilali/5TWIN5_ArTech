package com.example.gatewayapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;


@SpringBootApplication
@EnableEurekaClient
@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE}, allowedHeaders = "*")

public class GatewayApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApiApplication.class, args);
	}
	@Bean
	public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("Quizms", r->r.path("/quizzes/**",
								"/categories/**",
								"/questions/**")
						.uri("http://localhost:8099/"))
				.route("Auth", r->r.path("/appUsers/**","/profile/**","/user/**")
						.uri("http://localhost:9000/"))
				.route("ForumIntelipath", r->r.path("/posts/**","/commentses/**")
						.uri("http://localhost:8001/"))
				.route("Formations", r->r.path("/courses/**","/formations/**")
						.uri("http://localhost:8084/"))
				.route("Commande", r->r.path("/commande/**")
						.uri("http://localhost:9940/"))

				.build();
	}



}
