package com.andersbuck.app.webapp.service;

import java.util.Optional;

import javax.annotation.PostConstruct;

import com.andersbuck.app.webapp.domain.entities.UserEntity;
import com.andersbuck.app.webapp.domain.models.User;
import com.andersbuck.app.webapp.domain.repositories.UserRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ModelMapper modelMapper;

    @PostConstruct
    public void init() {
        // Populate a dummy user
        UserEntity userEnt = new UserEntity();
        userEnt.setName("David Byrne");
        userEnt.setUsername("TlkHd77");
        userEnt.setEmail("david.byrne@gmail.com");

        userRepo.save(userEnt);
    }

    public User fetchUser(Long id) {
        Optional<UserEntity> userEnt = userRepo.findById(id);

        if (userEnt.isPresent()) {
            return modelMapper.map(userEnt.get(), User.class);
        } else {
            throw new IllegalArgumentException("User not found!");
        }
    }
}