package com.gft.mpo.service;

import com.gft.mpo.model.User;
import com.gft.mpo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public List<User> findAllUsers(String username) {
        return userRepository.findAll(username);
    }
    public User saveUser(User user){
        return userRepository.save(user);
    }
}
