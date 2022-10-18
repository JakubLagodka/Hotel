package com.gft.mpo.repository;

import com.gft.mpo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    @Query(value = "select u from User u where (LOWER(u.username)=LOWER(:username) or :username is null )")
    List<User> findAll(@Param("username") String username);
}
