package ciclos;

import javax.swing.*;

public class CicloDoWhile {
    public static void main(String[] args) {
        String clave = "Pedro";
        String comparacion = "";

        do {
            comparacion = JOptionPane.showInputDialog("Introduce la contraseña");
            if(clave.equals(comparacion) == false) {
                System.out.println("La contraseña es incorrecta");
            }
        } while (!clave.equals(comparacion));

        System.out.println("La contraseña es correcta");
    }
}
