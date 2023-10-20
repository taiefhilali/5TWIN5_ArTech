package tn.esprit.forumintelipath.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

import static javax.persistence.FetchType.LAZY;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Post implements Serializable {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private  Long postId;
    private  String postTitle;
    private Integer voteCount;
    private String postDescription;
    @Enumerated(EnumType.STRING)
    private Categories category;
    private byte[] image; // Add this field for the image

    @CreationTimestamp
    private Date dateCreated;


    //@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    //@ManyToOne(fetch = FetchType.LAZY)  // Many posts can be associated with one user
    //@JoinColumn(name = "username", referencedColumnName = "username")
   // private User user;

}
