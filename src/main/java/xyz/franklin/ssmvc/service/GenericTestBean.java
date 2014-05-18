package xyz.franklin.ssmvc.service;

import org.apache.log4j.Logger;
import org.joda.time.DateTime;

public class GenericTestBean {
	
	protected static Logger logger4J = Logger.getLogger("service");

	public void init() {
		DateTime dt = new DateTime();
		logger4J.debug(dt.minusDays(7).withTimeAtStartOfDay().getMillis());
	}
}
