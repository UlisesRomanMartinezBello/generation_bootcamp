package ciclos;

import javax.swing.*;

public class EjercicioCiclosUno {
    public static void main(String[] args) {
        int numero = 5;
        int ingresado;

        do {
            ingresado = Integer.parseInt(JOptionPane.showInputDialog("Ingresa un numero"));
            if(numero != ingresado) {
                System.out.println("El numero es incorrecto");
            }
        } while(numero != ingresado);

        System.out.println("El numero es correcto");
    }
}
