package colleciones;

import java.util.*;

public class Colleciones {
    public static void main(String[] args) {
        // Declaracion de la lista
        List<String> myArray = new ArrayList<String>();

        // Añadir elementos en una lista
        myArray.add("Pedro");
        myArray.add("Yair");
        myArray.add("Maria");
        myArray.add(1, "Raul");

        // Eliminar elementos de una lista
        // myArray.remove(1);

        // Imprimir la lista
        // System.out.println(myArray);
        // Saber el tamaño de la lista
        // System.out.println(myArray.size());
        // imprimir(myArray);

        int numeroUno = 2;
        Integer numeroDos = 3;

        // System.out.println(numeroUno);
        // System.out.println(numeroDos.getClass());

        List<Integer> arrayInteger = new ArrayList<Integer>();
        arrayInteger.add(4);
        arrayInteger.add(5);
        arrayInteger.add(6);

        // imprimir(arrayInteger);

        // Los sets no pueden almacenar elementos repetidos
        Set<String> miSet = new HashSet<String>();
        miSet.add("Lupe");
        miSet.add("Martha");
        miSet.add("Martha");
        miSet.add("Juan");
        miSet.add("Juan");
        miSet.add("Jorge");

        miSet.remove("Lupe");
        // imprimir(miSet);

        // Verificar si el elemento existe en el Set
        // System.out.println(miSet.contains("Yair"));

        Map<String, Integer> miMap = new HashMap<String, Integer>();
        miMap.put("Valor 1", 45);
        // Reescribe el valor si la llave es la misma
        miMap.put("Valor 1", 250);
        miMap.put("Valor 2", 50);
        miMap.put("Valor 3", 550);
        miMap.put("Valor 4", 150);

        // System.out.println(miMap);
        // System.out.println(miMap.keySet());
        // System.out.println(miMap.values());
        // System.out.println(miMap.get("Valor 1"));

        for (String llave: miMap.keySet()) {
            System.out.println(llave + " : " + miMap.get(llave));
        }

    }

    // Funcion para imprimir
    public static void imprimir(Collection coleccion) {
        for (Object elemento : coleccion) {
            System.out.println("Elemento = " + elemento);
        }
    }

}
