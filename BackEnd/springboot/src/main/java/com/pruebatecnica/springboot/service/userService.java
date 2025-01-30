package com.pruebatecnica.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pruebatecnica.springboot.models.userModels;

@Service
public class userService {

    @Autowired
    private com.pruebatecnica.springboot.repository.userRepository userRepository;

    public List<userModels> getUser() {
        return userRepository.findAll();
    }

    public userModels creatUser(userModels user) {
        return userRepository.save(user);
    }

    public Optional<userModels> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public userModels updateUser(Long id, userModels user) {
        if (userRepository.existsById(id)) {
            user.setId(id);
            return userRepository.save(user);
        }
        return null;
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
