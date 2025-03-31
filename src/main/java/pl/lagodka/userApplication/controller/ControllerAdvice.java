package pl.lagodka.userApplication.controller;
import pl.lagodka.userApplication.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
@org.springframework.web.bind.annotation.ControllerAdvice
public class ControllerAdvice {
  @ExceptionHandler(value = UserNotFoundException.class)
    @CrossOrigin
    public ResponseEntity<Void> handleUserNotFoundException() {
        return new R