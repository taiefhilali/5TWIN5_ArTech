package tn.esprit.auth.Response;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

public class PostsResponse {

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
