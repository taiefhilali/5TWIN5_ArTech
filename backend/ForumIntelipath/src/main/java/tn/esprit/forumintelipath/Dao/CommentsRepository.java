package tn.esprit.forumintelipath.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.esprit.forumintelipath.Entity.Comments;
import tn.esprit.forumintelipath.Entity.Post;

import java.util.List;

@Repository
public interface CommentsRepository extends JpaRepository<Comments, Long> {
/*
    @Query("" +
            "SELECT CASE WHEN COUNT(s) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Comments s " +
            "WHERE s.post = ?1"
    )*/

    //List<Comments> findCommentsByUser(User user);
    List<Comments> findByPost(Post post);

}