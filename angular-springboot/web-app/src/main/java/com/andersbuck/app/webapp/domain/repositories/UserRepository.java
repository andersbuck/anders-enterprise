package com.andersbuck.app.webapp.domain.repositories;

import com.andersbuck.app.webapp.domain.entities.UserEntity;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long>{}