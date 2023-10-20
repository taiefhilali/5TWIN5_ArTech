package tn.esprit.forumintelipath.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.forumintelipath.Dao.UserDao;
import tn.esprit.forumintelipath.Entity.User;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    public User getUserByUsername(String username) {
        return userDao.findById(username).orElse(null);
    }
}
