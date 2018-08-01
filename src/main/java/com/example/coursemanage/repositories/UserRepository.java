package com.example.coursemanage.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.coursemanage.models.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
