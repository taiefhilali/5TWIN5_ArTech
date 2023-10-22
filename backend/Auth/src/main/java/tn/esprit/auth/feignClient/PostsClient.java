package tn.esprit.auth.feignClient;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import tn.esprit.auth.Response.PostsResponse;

@FeignClient(name = "forum-s", url = "http://localhost:8001")

public interface PostsClient {

    @GetMapping("/{username}")
    public ResponseEntity<PostsResponse> getPostsbyusername(@PathVariable("username") String username);

}
