package com.pruebatecnica.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pruebatecnica.springboot.models.userModels;

@Repository
public interface userRepository extends JpaRepository<userModels, Long> {

}
