package tn.esprit.auth.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.auth.entities.AppUser;

import java.util.Optional;

public interface UserRepository extends JpaRepository<AppUser, Long> {
    Optional<AppUser> findByUsername(String username);
    Boolean existsByUsername(String username);
}
