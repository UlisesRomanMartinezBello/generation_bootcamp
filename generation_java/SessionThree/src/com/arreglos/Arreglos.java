package com.colleciones;

import java.util.Arrays;

public class Arreglos {
    public static void main(String[] args) {
        // Matrices o arreglos, solo pueden tener un tipo de dato, y debemos definir un numero de elementos
        int[] numeros = new int[5];
        numeros[0] = 23;
        numeros[1] = Integer.parseInt("2");

        // Recorrer array
        /*for (int i = 0; i < numeros.length; i++) {
            System.out.println(numeros[i]);
        }*/

        // forEach
        /*for (int element: numeros) {
            System.out.println(element);
        }*/
        /*System.out.println(Arrays.toString(numeros));*/

        Persona personaUno = new Persona("Ulises", 23);
        Persona personaDos = new Persona("Raul", 31);
        Persona personaTres = new Persona("Jorge", 29);

        // Object personas[] = new Object[3];
        Persona personas[] = new Persona[3];
        personas[0] = personaUno;
        personas[1] = personaDos;

        /*for (int i = 0; i < personas.length; i++) {
            System.out.println(personas[i]);
        }*/



    }
}
