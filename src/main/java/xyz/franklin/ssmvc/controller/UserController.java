package xyz.franklin.ssmvc.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import xyz.franklin.ssmvc.domain.Meal;
import xyz.franklin.ssmvc.domain.User;
import xyz.franklin.ssmvc.service.UserService;

@Controller
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService userService;

	@RequestMapping(value="/", method=RequestMethod.GET)
	public @ResponseBody List<User> getUsers(HttpServletResponse response) {
		       
		return userService.readAll();
	}
	
	@RequestMapping(value="/{username}", method=RequestMethod.GET)
	public @ResponseBody User get(@PathVariable String username) {
		return userService.read(username);
	}

	@RequestMapping(value="/{username}/meal", method=RequestMethod.POST)
	public @ResponseBody User newMeal(@PathVariable String username, @RequestBody Meal meal, HttpServletResponse resp) {
		User u = userService.addMeal(username, meal);
		if (null == u)
			resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
		return u;
	}
}
