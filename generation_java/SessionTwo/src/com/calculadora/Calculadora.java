package com.calculadora;

public class Calculadora {
    public void sumarMensaje() {
        System.out.println("Voy a sumar");
    }

    public String mensaje() {
        String mensaje = "Voy a regresar un mensaje";
        return mensaje;
    }

    public int prueba() {
        return 2;
    }

    public int sumar(int a, int b) {
        return a + b;
    }

    public int restar(int a, int b) {
        return  a - b;
    }

    public int multiplicar(int a, int b) {
        return a * b;
    }

    public double dividir(double a, double b) {
        return a / b;
    }
}
