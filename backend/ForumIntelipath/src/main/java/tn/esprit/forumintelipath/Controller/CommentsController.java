package tn.esprit.forumintelipath.Controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.forumintelipath.Entity.Comments;
import tn.esprit.forumintelipath.Service.CommentsService;

import java.io.Serializable;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/comment")
//@PreAuthorize("hasRole('User')")
public class CommentsController implements Serializable {

    @Autowired
    private final CommentsService commentsService;

    @PostMapping("/add/{postId}")
    public Comments addComment(@PathVariable Long postId, @RequestBody Comments comments){

        return commentsService.addComment(postId, comments);

    }

    @GetMapping("/get/post/{postId}")
    public List<Comments> getCommentsByPost(@PathVariable Long postId){

        return commentsService.getCommentsFromPost(postId);
    }

/*

    @PostMapping("/add/{id}")
    public ResponseEntity<Comments> addComment(@PathVariable Long id, @RequestBody Map<String, Object> requestMap) {
        String username = (String) requestMap.get("username");

        // Extract comment properties from the map
        String commentText = (String) requestMap.get("comment");
        Integer voteCount = (Integer) requestMap.get("voteCount");
        // Extract other properties as needed...

        // Create a new Comments object
        Comments comments = new Comments();
        comments.setComment(commentText);
        comments.setVoteCount(voteCount);
        // Set other properties as needed...

        Comments savedComment = commentsService.addComment(id, comments, username);

        return new ResponseEntity<>(savedComment, HttpStatus.CREATED);
    }


    @GetMapping("/get/findBy/user/{username}")
    public ResponseEntity<List<Comments>> getCommentsForUser(@PathVariable("username") String username) {
        User user = userDao.findUserByUserName(username);

        if (user == null) {
            // Log the error for debugging purposes
            System.err.println("User not found for username: " + username);

            // Return a 404 Not Found response
            return ResponseEntity.notFound().build();
        }

        try {
            List<Comments> comments = commentsService.findCommentsForUser(user);
            return ResponseEntity.ok(comments);
        } catch (Exception e) {
            // Log the error for debugging purposes
            System.err.println("Error retrieving comments for user: " + username);
            e.printStackTrace();

            // Return a 500 Internal Server Error response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }




*/
}
