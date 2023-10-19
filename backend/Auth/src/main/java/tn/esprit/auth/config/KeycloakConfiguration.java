package tn.esprit.auth.config;

import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.admin.client.resource.UsersResource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component

public class KeycloakConfiguration {
    private final String serverUrl;
    private final String realm;
    private final String userName;
    private final String password;
    private final String clientId;
    private final String clientSecret;

    public KeycloakConfiguration(
            @Value("${keycloak.auth-server-url}") String serverUrl,
            @Value("${keycloak.realm}") String realm,
            @Value("${admin_username}") String userName,
            @Value("${admin_password}") String password,
            @Value("${spring.security.oauth2.client.registration.oauth2-client-credentials.client-id}") String clientId,
            @Value("${spring.security.oauth2.client.registration.oauth2-client-credentials.client-secret}") String clientSecret
    ) {
        this.serverUrl = serverUrl;
        this.realm = realm;
        this.userName = userName;
        this.password = password;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }


    public UsersResource getUsersResource() {
        Keycloak keycloak = KeycloakBuilder.builder()
                .serverUrl(serverUrl)
                .realm(realm)
                .grantType(OAuth2Constants.PASSWORD)
                .username(userName)
                .password(password)
                .clientId(clientId)
                .clientSecret(clientSecret)
                .build();

        RealmResource realmResource = keycloak.realm(realm);
        return realmResource.users();
    }
}
