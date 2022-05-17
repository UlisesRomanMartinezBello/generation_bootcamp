package com.perros;

public class Perro {
    String nombre;
    int edad;
    String raza;
    String tamanio;

    public Perro(String nombre, int edad, String raza, String tamanio) {
        this.nombre = nombre;
        this.raza = raza;
        this.tamanio = tamanio;
        this.edad = edad;
    }
    public void ladrar() {
        System.out.println("El perro " + nombre + " hace guaf");
    }
    public int edadPerruna() {
        return edad * 7;
    }
    // Metodos estaticos - Nos sirven sin instanciar la clase
    public static void mensaje() {
        System.out.println("Este es un metodo estatico");
    }
}
