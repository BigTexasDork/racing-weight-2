package xyz.franklin.ssmvc.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

import edu.vt.middleware.password.RuleResult;

@RunWith(SpringJUnit4ClassRunner.class)
public class PasswordServiceTest {

	@Autowired
	PasswordService passwordService;
	
	@Autowired
	
	@Test
	public void testValidatePassword() {
		
		  /** Test password. */
		  final String MIN_VALID_PASS = "p4T3#";

	    RuleResult result = passwordService.validatePassword(MIN_VALID_PASS);
	    Assert.notNull(result);
	}
}
