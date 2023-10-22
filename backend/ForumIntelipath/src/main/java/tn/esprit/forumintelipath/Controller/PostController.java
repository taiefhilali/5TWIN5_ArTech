package tn.esprit.forumintelipath.Controller;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.forumintelipath.Entity.Post;

import tn.esprit.forumintelipath.Service.PostService;
import tn.esprit.forumintelipath.Service.UserService;

import javax.ws.rs.PathParam;
import java.util.Optional;


@RestController
@AllArgsConstructor
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*")

public class PostController {

    @Autowired
    private final PostService postService;
    @Autowired
    private final UserService userService;



    @PostMapping("/add/{username}")
    public ResponseEntity<Post> addQuestion(@RequestBody Post post ,@PathVariable String username) {

        Post post1 = this.postService.createPost(post,username);
        return ResponseEntity.ok(post1);
    }

    @GetMapping("/user/{userid}")
    public Iterable<Post> getPostsByUserIdOrderByDesc(@PathVariable Long userid) {
        return postService.getPostsByUserIdOrderByDesc(userid);
    }

/*
    @PostMapping("/")
    public ResponseEntity<Post> addQuestion(@RequestBody Post post ) {

        Post post1 = this.postService.createPost(post);
        return ResponseEntity.ok(post1);
    }
*/


    @GetMapping("/allpost/{username}")
    public Iterable<Post> showAllPostsDesc() {
        return postService.getPost();
    }


    @GetMapping("/get/post/{postId}")
    public Optional<Post> getPostById(@PathVariable("postId") Long id){
        return postService.selectPost(id);
    }


    @GetMapping("/get/category/{category}")
    public Iterable<Post> showPostsByCategories(@PathVariable("category") String category){

        return postService.showPostsByCategory(category);
    }

}

/*
    @GetMapping("/findBy/user/{username}")
    public List<Post> findByPostsByUsername(@PathVariable("username")String username){

        User user = userDao.findUserByUserName(username);

        return postService.findPostByUser(user);
    }

    @GetMapping("/find/{name}")
    public Iterable<Post> findByName(@PathVariable("name") String name){
        return postService.SearchPostsByName(name);
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable Long postId, @RequestBody Map<String, Object> requestBody) {
        try {
            // Extract username from the request body
            String username = (String) requestBody.get("username");

            // Call the service to delete the post
            postService.deletePost(postId, username);

            return ResponseEntity.ok("Post deleted successfully");
        } catch (Exception e) {
            // Handle exceptions, log them, and return an appropriate response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting post");
        }
    }


   @GetMapping("/like/{id}")
    public Post likePostById(@PathVariable("id") Long id){


        return postService.giveALike(id);
    }
    @GetMapping("/dislike/{id}")
    public Post dislikePostById(@PathVariable("id") Long id){


        return postService.giveADisLike(id);
    }
}

*/