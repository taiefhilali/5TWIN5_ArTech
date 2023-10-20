package com.example.twin5_projet_e_learning.controllers;

import com.example.twin5_projet_e_learning.entities.Cours;
import com.example.twin5_projet_e_learning.services.CoursService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/courses")
public class CoursController {

    @Autowired
    public CoursService cs;

    @GetMapping("/all")
    public List<Cours> getCours() {
        return cs.findAllCours();

    }

    @GetMapping("/cours/{id}")
    public Cours getCoursbyId(@PathVariable("id") Long id) {
        return cs.getCoursbyId(id);
    }

    @PostMapping("/add")
    @ResponseBody
    public Cours addCours(@RequestBody Cours c) {
        return  cs.addCours(c);
    }

    @PutMapping("/edit")
    @ResponseBody
    public Cours update(@RequestBody Cours c) {
        return cs.updateCours(c);
    }

    @DeleteMapping("/delete/{id}")
    public void removeCours(@PathVariable("id") Long id) {
        cs.deleteCours(id);
    }


}
