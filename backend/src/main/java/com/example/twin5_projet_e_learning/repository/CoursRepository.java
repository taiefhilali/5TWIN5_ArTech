package com.example.twin5_projet_e_learning.repository;

import com.example.twin5_projet_e_learning.entities.Cours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoursRepository extends JpaRepository<Cours,Long> {
}