package com.perros;

public class PruebaPerro {
    public static void main(String[] args) {
        Perro perroUno = new Perro("Patitas", 3, "Husky", "Mediano");
        System.out.println(perroUno.edadPerruna());
        Perro.mensaje();
    }
}
