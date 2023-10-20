package com.example.twin5_projet_e_learning.services;

import com.example.twin5_projet_e_learning.entities.Cours;
import com.example.twin5_projet_e_learning.repository.CoursRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoursService {

    @Autowired
    CoursRepository cr;

    public List<Cours> findAllCours(){
        return cr.findAll();
    }
    public Cours addCours(Cours cours) {
        return cr.save(cours);
    }

    public Cours getCoursbyId(Long id) {
        return cr.findById(id).get();
    }

    public void deleteCours(Long id) {
        cr.deleteById(id);
    }

    public Cours updateCours(Cours cours) {
       return cr.save(cours);

    }
}
