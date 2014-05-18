package xyz.franklin.ssmvc.service;

import java.util.Arrays;

import org.apache.log4j.Logger;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import xyz.franklin.ssmvc.domain.Meal;
import xyz.franklin.ssmvc.domain.User;

/**
 * Service for initializing MongoDB with sample data using {@link MongoTemplate}
 */
public class InitMongoService {
	
	protected static Logger logger4J = Logger.getLogger("service");
	
	@Autowired
	private MongoTemplate mongoTemplate;
	
	@Autowired
	private BCryptPasswordEncoder encoder;

	public void init() {

		logger4J.debug("initializing database");
		
		// Drop existing collections
		mongoTemplate.dropCollection("user");

		// Create new records
		User john = new User();
		john.setUsername("john");
		john.setFirstName("John");
		john.setLastName("Smith");
		john.setPassword(encoder.encode((CharSequence)"koala"));
		john.setRole(1);
		
		DateTime d = new DateTime();
		Meal m1 = new Meal(d.minusDays(7).withTimeAtStartOfDay(), "Breakfast");
		Meal m2 = new Meal(d.minusDays(7).withTimeAtStartOfDay(), "Lunch");
		Meal m3 = new Meal(d.minusDays(7).withTimeAtStartOfDay(), "Dinner");
		
		john.setMeals(Arrays.asList(m1, m2, m3));
		
		User jane = new User();
		jane.setUsername("jane");
		jane.setFirstName("Jane");
		jane.setLastName("Adams");
		jane.setPassword(encoder.encode((CharSequence)"bear"));
		jane.setRole(2);

		// 2 meals for jane
		// Insert to db
		mongoTemplate.insert(john, "user");
		mongoTemplate.insert(jane, "user");
	}
}
