package tn.esprit.forumintelipath.Entity;

import com.sun.istack.NotNull;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Setter
@Entity
@Table(name = "user_table")  // Specify the table name explicitly
public class User implements Serializable {
    @Id
    @NotNull
    private String userName;

    public User(){

    }
    public User(String username) {
        this.userName = username;
    }

    // Getter and setter methods
    public String getUsername() {
        return userName;
    }

    public void setUsername(String username) {
        this.userName = username;
    }

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "postId", referencedColumnName = "postId")
    private Post post;
}

