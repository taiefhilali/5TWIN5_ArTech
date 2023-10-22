package tn.esprit.forumintelipath.Entity;

import com.sun.istack.NotNull;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Setter
@Entity
@Table(name = "user_table")  // Specify the table name explicitly
public class AppUser implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;


    private String lastName;

    private String username;

    private String email;

    private String role;

    private String password;

    private String address= "";

    private String description= "";

    private String phone= "";

    private String instagram= "";

    private String facebook= "";

    private String github= "";

    private String twitter= "";

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}

