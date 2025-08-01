/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.sft.sftweb.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author cmmau
 */
/**
 *   
 * se crea un controlador que no de una bienvenida
 */   
@RestController
public class BienvenidaController {
    @GetMapping("/bienvenido")
    public String bienvenido (){
        return "Bienvenido a SFT";
    }
    
}
