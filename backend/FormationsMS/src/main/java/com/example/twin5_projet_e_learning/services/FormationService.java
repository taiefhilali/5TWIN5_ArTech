package com.example.twin5_projet_e_learning.services;

import com.example.twin5_projet_e_learning.entities.Formation;
import com.example.twin5_projet_e_learning.repository.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormationService {

    @Autowired
    FormationRepository fr;

    public List<Formation> findAllFormation(){
        return fr.findAll();
    }
    public Formation addFormation(Formation formation) {
        return fr.save(formation);
    }

    public Formation getFormationbyId(Long id) {
        return fr.findById(id).get();
    }

    public void deleteFormation(Long id) {
        fr.deleteById(id);
    }

    public Formation updateFormation(Formation formation) {
       return fr.save(formation);

    }
}
