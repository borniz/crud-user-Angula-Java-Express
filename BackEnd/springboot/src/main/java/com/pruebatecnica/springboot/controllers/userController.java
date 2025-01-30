package com.pruebatecnica.springboot.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pruebatecnica.springboot.models.userModels;
import com.pruebatecnica.springboot.service.userService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE, RequestMethod.OPTIONS, RequestMethod.PATCH })
@RequestMapping("/api")
public class userController {
    @Autowired
    private userService service;

    @GetMapping("/data")
    public ResponseEntity<List<userModels>> findAll() {
        try {
            List<userModels> users = service.getUser();
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/data")
    public ResponseEntity<userModels> createUser(@RequestBody userModels user) {
        System.out.println("📢 Endpoint /data ha sido llamado");
        System.out.println("📥 Datos recibidos: " + user);

        try {
            userModels createdUser = service.creatUser(user);
            return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/data/{id}")
    public ResponseEntity<userModels> updateUser(@PathVariable("id") Long id, @RequestBody userModels user) {
        try {

            Optional<userModels> existingUser = service.getUserById(id);

            if (existingUser.isPresent()) {
                userModels updatedUser = service.updateUser(id, user);
                return new ResponseEntity<>(updatedUser, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/data/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
        try {

            Optional<userModels> user = service.getUserById(id);

            if (user.isPresent()) {
                service.deleteUser(id);
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
