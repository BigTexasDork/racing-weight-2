package xyz.franklin.ssmvc.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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
//		return null;
	}
	
	@RequestMapping(value="/{username}", method=RequestMethod.GET)
	public @ResponseBody User get(@PathVariable String username) {
		return userService.read(username);
//		return null;
	}

}
