package tn.esprit.forumintelipath.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.forumintelipath.Dao.CommentsRepository;
import tn.esprit.forumintelipath.Dao.PostRepository;
import tn.esprit.forumintelipath.Entity.Comments;
import tn.esprit.forumintelipath.Entity.Post;
import tn.esprit.forumintelipath.Service.Exceptions.PostDoesNotExistsException;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Slf4j
@AllArgsConstructor
@Transactional
public class CommentsService {

    //private final UserDao userDao;
    @Autowired
    private final CommentsRepository commentsRepository;

    @Autowired
    private final PostRepository postRepository;




    public List<Comments> getCommentsFromPost(Long postId){
        Post post = postRepository.findById(postId).orElseThrow(() -> new PostDoesNotExistsException(
                "Post does not exists"
        ));
        return commentsRepository.findByPost(post);
    }
    public Comments addComment( Long postId,Comments comments)  {

        comments.setComment(comments.getComment());
        comments.setName(comments.getName());
        comments.setEmail(comments.getEmail());
        comments.setPost(postRepository.getById(postId));
        Boolean exists = postRepository.selectExistsId(postId);
        if(!exists){
            throw new PostDoesNotExistsException(
                    "Post Does not exists!"
            );
        }

        return commentsRepository.save(comments);

    }}
    /*
    public List<Comments> findCommentsForUser(User user) {
        return commentsRepository.findCommentsByUser(user);
    }*/




