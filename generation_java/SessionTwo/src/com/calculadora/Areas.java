package com.calculadora;

public class Areas {
    public void mensaje() {
        System.out.println("Voy a calular un area");
    }

    public double cuadrado(double lado) {
        return lado * lado;
    }

    public double triangulo(double base, double altura) {
        return (base * altura) / 2;
    }
}
