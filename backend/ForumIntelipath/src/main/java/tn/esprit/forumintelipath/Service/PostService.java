package tn.esprit.forumintelipath.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.forumintelipath.Dao.PostRepository;
import tn.esprit.forumintelipath.Dao.UserClient;
import tn.esprit.forumintelipath.Entity.AppUser;
import tn.esprit.forumintelipath.Entity.Post;
import tn.esprit.forumintelipath.Service.Exceptions.PostNotFoundException;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
@Transactional

public class PostService {
    @Autowired
    private final PostRepository postRepository;
    @Autowired
    private UserClient userClient;


    public Optional<Post> selectPost(Long postId) {
        Boolean exists = postRepository.selectExistsId(postId);
        if (!exists) {
            throw new PostNotFoundException(
                    "Post not found!"
            );
        }
        return postRepository.findById(postId);
    }

    public List<Post> getPost() {
        // Convert the Iterable (likely ArrayList) to a List
        return new ArrayList<>(this.postRepository.findAll());
    }

    public Iterable<Post> showPostsByCategory(String category) {
        return postRepository.findPostByCategory(category);

    }
    public Iterable<Post> getPostsByUserIdOrderByDesc(Long userid) {
        return postRepository.findPostsByUserIdOrderByDesc(userid);
    }
    public Iterable<Post> showAllPostsDesc() {
        return postRepository.findByIdDesc();
    }

    /*public Iterable<Post> findMostLikedPosts() {

        return postRepository.findPostByVoteCountDesc();
    }

    public Iterable<Post> SearchPostsByName(String name) {
        return postRepository.searchByPostTitle(name);

    }*/

//    public Post createPost(Post post) {
//        return this.postRepository.save(post);
//    }}

    public Post createPost(Post post, String username) {
        try {
            AppUser user = userClient.getUserByUsername(username);
            //post.setPostId(post.getPostId());
            post.setPostTitle(post.getPostTitle());
            post.setPostDescription(post.getPostDescription());
            post.setCategory(post.getCategory());

            //post.setUser(post.getUser());
            post.setUserid(user.getId());
            post.setUser(user);
            post.setVoteCount(0);
            return postRepository.save(post);
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace(); // Change this to use your logger
            throw new RuntimeException("Error creating post", e);
        }
    }



/*
    public Post giveALike(Long id){
        Post post = postRepository.getById(id);
        post.setVoteCount(post.getVoteCount()+1);
        return postRepository.save(post);
    }
    public Post giveADisLike(Long id){
        Post post = postRepository.getById(id);
        post.setVoteCount(post.getVoteCount()-1);
        return postRepository.save(post);
    }

    public  Iterable<Post> showPostsByCategory(String category){
        return postRepository.findPostByCategory(category);

    }

  /*  public List<Post> findPostByUser(User user){

        return  postRepository.findPostByUser(user);
    }*/


    // public void updatePost(Long postId, String username){

    //Post post = postRepository.findPostByPostId(postId);
    // User user = userDao.findUserByUserName(username);

      /* if(post.getUser() == user) {
            post.setPostTitle(post.getPostTitle());
            post.setPostDescription(post.getPostDescription());
            postRepository.save(post);
        } else {
            throw new NotUserPostFound(
                    "You can't edit this post!"
            );
        }

    }*/

    /*public void deletePost(Long postId, String username){
        User user = userDao.findUserByUserName(username);
        Post post = postRepository.findPostByPostId(postId);

        if(post.getUser() == user){
            postRepository.deleteById(postId);


        }
    }
}*/
}