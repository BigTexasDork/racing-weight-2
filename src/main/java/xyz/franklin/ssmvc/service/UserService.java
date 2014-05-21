package xyz.franklin.ssmvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import xyz.franklin.ssmvc.domain.Meal;
import xyz.franklin.ssmvc.domain.User;
import xyz.franklin.ssmvc.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User read(String username) {
		return userRepository.findByUsername(username);
	}
	
	public List<User> readAll() {
		return userRepository.findAll();
	}

	public User addMeal(String username, Meal meal) {
		User u = userRepository.findByUsername(username);
		if (null == u)
			return null;
		u.addMeal(meal);
		userRepository.save(u);
		return u;
	}
}
