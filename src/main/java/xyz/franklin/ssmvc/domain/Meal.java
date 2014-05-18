package xyz.franklin.ssmvc.domain;

import java.util.UUID;

import org.joda.time.DateTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Meal {

	@Id
	private String id;
	
	private DateTime date;
	private String type;
	
	public Meal() {
		this.id = UUID.randomUUID().toString();
	}
	
	public Meal(DateTime date, String type) {
		this.id = UUID.randomUUID().toString();
		this.date = date;
		this.type = type;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public DateTime getDate() {
		return date;
	}
	public void setDate(DateTime date) {
		this.date = date;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public String toString() {
		return "meal: " + date.toString("MMM d y") + " type: " + type;
	}
}
