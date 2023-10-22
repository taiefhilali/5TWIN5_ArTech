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
    private Long userid;
    @Transient
    private AppUser user;
    @CreationTimestamp
    private Date dateCreated;

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public Integer getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(Integer voteCount) {
        this.voteCount = voteCount;
    }

    public String getPostDescription() {
        return postDescription;
    }

    public void setPostDescription(String postDescription) {
        this.postDescription = postDescription;
    }

    public Categories getCategory() {
        return category;
    }

    public void setCategory(Categories category) {
        this.category = category;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public AppUser getUser() {
        return user;
    }

    public void setUser(AppUser user) {
        this.user = user;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    //@ManyToOne(fetch = FetchType.LAZY)  // Many posts can be associated with one user
    //@JoinColumn(name = "username", referencedColumnName = "username")
   // private User user;

}
