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
		Meal m4 = new Meal(d.minusDays(5).withTimeAtStartOfDay(), "Breakfast");
		Meal m5 = new Meal(d.minusDays(5).withTimeAtStartOfDay(), "Lunch");
		Meal m6 = new Meal(d.minusDays(5).withTimeAtStartOfDay(), "Dinner");
		Meal m7 = new Meal(d.minusDays(3).withTimeAtStartOfDay(), "Breakfast");
		Meal m8 = new Meal(d.minusDays(3).withTimeAtStartOfDay(), "Lunch");
		Meal m9 = new Meal(d.minusDays(3).withTimeAtStartOfDay(), "Dinner");
		
		john.setMeals(Arrays.asList(m1, m2, m3, m4, m5 ,m6, m7, m8, m9));
		
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
