package com.project.Commande.MicroserviceCalls;

import com.project.Commande.DTO.Formation;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "formations")
public interface FormationClient {

    @GetMapping(value = "formations/form/{id}")
    public Formation getFormation(@RequestParam("id") Long productId);
}
