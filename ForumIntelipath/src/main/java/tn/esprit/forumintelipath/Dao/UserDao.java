package tn.esprit.forumintelipath.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.esprit.forumintelipath.Entity.User;

@Repository
public interface UserDao extends JpaRepository<User, String> {
   /* User findUserByUserName(String username);



    @Query("" +
            "SELECT CASE WHEN COUNT(s) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM User s " +
            "WHERE s.userName = ?1"
    )
    Boolean selectExistsUsername(String username);*/
}