package com.test;

import com.model.Dog;

public class TestDog {
    public static void main(String[] args) {
        Dog peluza = new Dog("Peluza","French","Small", 3,"White");
        Dog solovino = new Dog("Solovino", "Mestizo", "Medium", 4, "Brown");
        solovino.setHuman("Daniel");
        System.out.println(peluza.toString());
        System.out.println(solovino.toString());
        peluza.sit();
    }
}