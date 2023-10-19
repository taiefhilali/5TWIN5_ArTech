package tn.esprit.auth.services;

import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tn.esprit.auth.config.KeycloakConfiguration;
import tn.esprit.auth.entities.AppUser;
import tn.esprit.auth.entities.Credentials;
import tn.esprit.auth.repositories.UserRepository;

import java.util.*;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    private KeycloakConfiguration keycloakConfiguration;
    @Autowired
    EmailSenderService senderService;

    public ResponseEntity<AppUser> addUser(AppUser user) {
        CredentialRepresentation credential = Credentials.createPasswordCredentials(user.getPassword());
        UserRepresentation userKey = new UserRepresentation();

        userKey.setUsername(user.getUsername());
        userKey.setFirstName(user.getFirstName());
        userKey.setLastName(user.getLastName());
        userKey.setEmail(user.getEmail());
        userKey.setCredentials(Collections.singletonList(credential));
        userKey.setEnabled(false);
        if (userKey.getAttributes() == null) {
            userKey.setAttributes(new HashMap<>());
        }
        userKey.getAttributes().put("role", Arrays.asList(user.getRole()));

        UsersResource usersResource = keycloakConfiguration.getUsersResource();

        usersResource.create(userKey);
        user.setPassword("");
        AppUser  savedUser = userRepository.save(user);
        senderService.sendEmail(user.getEmail(),user.getUsername());

        return ResponseEntity.ok(savedUser);
    }

    public Optional<AppUser> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public boolean doesUserExist(String username) {
        return userRepository.existsByUsername(username);
    }

    public List<AppUser> getAllUsers() {
        return userRepository.findAll();
    }

    public ResponseEntity<AppUser> updateUser(AppUser user) {

        if (userRepository.existsById(user.getId())) {
            UsersResource usersResource = keycloakConfiguration.getUsersResource();
            List<UserRepresentation> users = usersResource.search(user.getUsername());
            if (users != null && !users.isEmpty()) {
                UserRepresentation userKey = users.get(0);

                userKey.setFirstName(user.getFirstName());
                userKey.setLastName(user.getLastName());
                userKey.setEmail(user.getEmail());

                usersResource.get(userKey.getId()).update(userKey);

                AppUser updatedUser = userRepository.save(user);

                return ResponseEntity.ok(updatedUser);
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    public ResponseEntity<Void> deleteUser(Long userId, String username) {
        if (userRepository.existsById(userId)) {
            UsersResource usersResource = keycloakConfiguration.getUsersResource();
            List<UserRepresentation> users = usersResource.search(username);
            if (users != null && !users.isEmpty()) {
                UserRepresentation userKey = users.get(0);
                usersResource.get(userKey.getId()).remove();
                userRepository.deleteById(userId);

                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    public ResponseEntity<AppUser> enableUserByUsername(String username) {
        UsersResource usersResource = keycloakConfiguration.getUsersResource();
        List<UserRepresentation> users = usersResource.search(username);

        if (users != null && !users.isEmpty()) {
            UserRepresentation userKey = users.get(0);
            userKey.setEnabled(true);
            usersResource.get(userKey.getId()).update(userKey);

            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }



}
