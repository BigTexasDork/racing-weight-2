package xyz.franklin.ssmvc.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import xyz.franklin.ssmvc.domain.User;

public interface UserRepository extends MongoRepository<User, String> {

	User findByUsername(String username);

}
