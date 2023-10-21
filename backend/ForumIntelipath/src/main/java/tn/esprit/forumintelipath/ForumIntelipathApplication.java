package tn.esprit.forumintelipath;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import tn.esprit.forumintelipath.Dao.UserDao;
import tn.esprit.forumintelipath.Entity.User;

@SpringBootApplication
@EnableEurekaClient
public class ForumIntelipathApplication {

    public static void main(String[] args) {
        SpringApplication.run(ForumIntelipathApplication.class, args);
    }

    @Autowired
    private UserDao userDao;
    @Bean
    ApplicationRunner init(){
        return (args )-> {
            userDao.save(new User("Mariem"));


            //fetch
            userDao.findAll().forEach(System.out ::println);
        };

}

}
