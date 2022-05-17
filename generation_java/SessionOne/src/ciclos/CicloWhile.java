package ciclos;

import javax.swing.*;

public class CicloWhile {
    public static void main(String[] args) {
        // while
        /* int condicion = 0;
        while(condicion < 5) {
            System.out.println("Hola");
            condicion++;
        } */

        String clave = "Pedro";
        String comparacion = "";

        while(clave.equals(comparacion) == false) {
            comparacion = JOptionPane.showInputDialog("Introduce la contraseña");
            if(clave.equals(comparacion) == false) {
                System.out.println("La contraseña es incorrecta");
            }
        }

        System.out.println("La contraseña");

    }
}
