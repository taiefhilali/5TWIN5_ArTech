package tn.esprit.forumintelipath.Entity;

import java.io.Serializable;

public enum Vote implements Serializable {

    UPVOTE(1), DOWNVOTE(-1),
    ;

    Vote(int likeCount){

    }
}