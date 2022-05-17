package com.calculadora;

public class PruebaCalculadora {
    public static void main(String[] args) {
        /* Calculadora calculadora = new Calculadora();
        // void
        calculadora.sumarMensaje();
        // string
        System.out.println(calculadora.mensaje());
        // int
        System.out.println(calculadora.prueba());
        // Funciones con parametros
        System.out.println(calculadora.sumar(18,6));
        int restar = calculadora.restar(18, 6);
        System.out.println(restar);
        System.out.println(calculadora.multiplicar(18,6));
        System.out.println(calculadora.dividir(18,3)); */

        Areas areas = new Areas();
        areas.mensaje();

        // Cuadrado
        double cuadrado = areas.cuadrado(5);
        System.out.println(cuadrado);

        // Triangulo
        double triangulo = areas.triangulo(20, 15);
        System.out.println(triangulo);
    }
}
