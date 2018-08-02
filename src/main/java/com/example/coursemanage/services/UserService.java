package com.example.coursemanage.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.coursemanage.models.User;
import com.example.coursemanage.repositories.UserRepository;

@RestController
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/register")
	public User register(@RequestBody User user, HttpSession session) {
		User cu = userRepository.save(user);
		session.setAttribute("currentUser", cu);
		return cu;
	}
	
	@GetMapping("/checkLogin")
	public User checkLogin(HttpSession session) {
		return (User) session.getAttribute("currentUser");
	}
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>)userRepository.findAll();
	}
	
	@GetMapping("/api/user/{userId}")
	public Optional<User> findUserById(@PathVariable("userId") String userId) {
		int id = Integer.parseInt(userId);
		return userRepository.findById(id);
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User user) {
		return userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
	}
}
