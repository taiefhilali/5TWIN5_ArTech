package com.example.twin5_projet_e_learning.controllers;

import com.example.twin5_projet_e_learning.entities.Cours;
import com.example.twin5_projet_e_learning.entities.Formation;
import com.example.twin5_projet_e_learning.services.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/formations")
public class FormationController {

    @Autowired
    public FormationService fs;


    @GetMapping("/all")
    public List<Formation> getFormation() {
        return fs.findAllFormation();

    }

    @GetMapping("/form/{id}")
    public Formation getFormationbyId(@PathVariable("id") Long id) {
        return fs.getFormationbyId(id);
    }

    @PostMapping("/add")
    @ResponseBody
    public Formation addFormation(@RequestBody Formation f) {
        return  fs.addFormation(f);
    }

    @PutMapping("/edit")
    @ResponseBody
    public Formation updateFormation(@RequestBody Formation f) {
        return fs.updateFormation(f);
    }

    @DeleteMapping("/delete/{id}")
    public void removeFormation(@PathVariable("id") Long id) {
        fs.deleteFormation(id);
    }
}
