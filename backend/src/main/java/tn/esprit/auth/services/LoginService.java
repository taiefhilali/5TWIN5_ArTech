package tn.esprit.auth.services;

import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import tn.esprit.auth.entities.AppUser;
import tn.esprit.auth.entities.LoginRequest;
import tn.esprit.auth.entities.LoginResponse;

import java.util.List;

@Service
public class LoginService {
    @Autowired
    RestTemplate restTemplate;
    @Autowired
    UserService userService;

    @Value("${spring.security.oauth2.client.provider.keycloak.issuer-uri}")
    private String issueUrl;

    @Value("${spring.security.oauth2.client.registration.oauth2-client-credentials.client-id}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.oauth2-client-credentials.client-secret}")
    private String clientSecret;

    @Value("${spring.security.oauth2.client.registration.oauth2-client-credentials.authorization-grant-type}")
    private String grantType;

    @Value("${spring.security.oauth2.client.provider.keycloak.token-uri}")
    private String token;
    public ResponseEntity<LoginResponse> login(LoginRequest loginRequest){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String,String> map = new LinkedMultiValueMap<>();
        map.add("client_id",clientId);
        map.add("client_secret",clientSecret);
        map.add("grant_type",grantType);
        map.add("username",loginRequest.getUsername());
        map.add("password",loginRequest.getPassword());

        HttpEntity<MultiValueMap<String,String>> httpEntity= new HttpEntity<>(map,headers);
        AppUser user = userService.getUserByUsername(loginRequest.getUsername()).get();
        ResponseEntity<LoginResponse> response = restTemplate.postForEntity(token,httpEntity, LoginResponse.class);

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setAccess_token(response.getBody().getAccess_token());
        loginResponse.setUser(user);

        return new ResponseEntity<>(loginResponse, HttpStatus.OK);
    }
}
