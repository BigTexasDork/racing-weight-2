package xyz.franklin.ssmvc.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import edu.vt.middleware.password.Password;
import edu.vt.middleware.password.PasswordData;
import edu.vt.middleware.password.PasswordValidator;
import edu.vt.middleware.password.RuleResult;

public class GenericTestBean {

	protected static Logger logger4J = Logger.getLogger("service");

	@Autowired
	PasswordValidator pv;

	public void init() {

		logger4J.debug("Testing password: testpassword");
		PasswordData passwordData = new PasswordData(new Password(
				"testpassword"));
		validateThePassword(passwordData);
		
		logger4J.debug("Testing password: test");
		passwordData.setPassword(new Password("test"));
		validateThePassword(passwordData);
	}

	private void validateThePassword(PasswordData passwordData) {
		RuleResult result = pv.validate(passwordData);
		if (result.isValid()) {
			logger4J.debug("Valid password");
		} else {
			logger4J.debug("Invalid password:");
			for (String msg : pv.getMessages(result)) {
				logger4J.debug(msg);
			}
		}
	}
}
