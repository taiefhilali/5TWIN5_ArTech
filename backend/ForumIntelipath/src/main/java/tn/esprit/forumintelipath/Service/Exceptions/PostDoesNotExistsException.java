package tn.esprit.forumintelipath.Service.Exceptions;

public class PostDoesNotExistsException extends RuntimeException {
    public PostDoesNotExistsException(String m) {
        super(m);
    }
}