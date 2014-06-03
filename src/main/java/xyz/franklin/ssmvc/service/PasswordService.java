package xyz.franklin.ssmvc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.vt.middleware.password.Password;
import edu.vt.middleware.password.PasswordData;
import edu.vt.middleware.password.PasswordValidator;
import edu.vt.middleware.password.RuleResult;

@Service
public class PasswordService {

	@Autowired
	PasswordValidator pv;

	public RuleResult validatePassword(String password) {
		PasswordData passwordData = new PasswordData(new Password(password));
		return pv.validate(passwordData);
	}
}
