package com.microservices.quizms.Quizzes;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name="category")
@Transactional

public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cid;
    private String title;
    private String description;


    @OneToMany(mappedBy = "category")
    @JsonManagedReference
    private Set<Quiz> quizzes = new LinkedHashSet<>();



    public Category() {
    }

    public Category(String title, String description, Set<Quiz> quizzes) {
        this.title = title;
        this.description = description;
        this.quizzes = quizzes;
    }

    public Long getCid() {
        return cid;
    }
    public void setCid(Long cid) {
        this.cid = cid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public Set<Quiz> getQuizzes() {
        return quizzes;
    }

    public void setQuizzes(Set<Quiz> quizzes) {
        this.quizzes = quizzes;
    }
}
