package tn.esprit.forumintelipath.Controller;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.forumintelipath.Dao.UserDao;
import tn.esprit.forumintelipath.Entity.Categories;
import tn.esprit.forumintelipath.Entity.Post;
import tn.esprit.forumintelipath.Entity.User;
import tn.esprit.forumintelipath.Service.PostService;
import tn.esprit.forumintelipath.Service.UserService;

import java.io.IOException;
import java.security.Principal;
import java.util.List;
import java.util.Map;
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
    @Autowired
    private final UserDao userDao;


    /*@PostMapping("/add")
    public ResponseEntity<String> addPost(@RequestBody Map<String, Object> requestMap) {
        try {
            // Extract username and post details from the request payload
            //String username = (String) requestMap.get("username");
            Map<String, Object> postMap = (Map<String, Object>) requestMap.get("post");

            // Create a Post object from the post details
            Post post = new Post();
            post.setPostTitle((String) postMap.get("postTitle"));
            post.setPostDescription((String) postMap.get("postDescription"));
            Categories categoryFromRequest = Categories.valueOf((String) postMap.get("category"));
            post.setCategory(categoryFromRequest);
            // Fetch the user by username
           // User user = userService.getUserByUsername(username);

            // Check if the user exists
            //if (user == null) {
               // return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");}


            // Associate the post with the user
           // post.setUser(user);

            // Call the service to create the post
            postService.createPost(post);

            return ResponseEntity.ok("Post created successfully");
        } catch (Exception e) {
            // Handle exceptions, log them, and return an appropriate response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating post");
        }
    }*/


    @PostMapping("/")
    public ResponseEntity<Post> addQuestion(@RequestBody Post post) {

        Post post1 = this.postService.createPost(post);
        return ResponseEntity.ok(post1);
    }


    @GetMapping("/allpost")
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