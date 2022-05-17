package ciclos;

public class CicloFor {
    public static void main(String[] args) {
        /*for (int i = 0; i <= 10; i++) {
            System.out.println(i);
        }*/

        /*for (int i = 10; i >= 1; i--) {
            System.out.println(i);
        }*/

        /*for (int i = 0; i <= 20; i+=2) {
            System.out.println(i);
        }*/

        /* continue & break */
        for (int i = 1; i <= 20; i++) {
            if (i % 2 == 0) {
                System.out.println(i);
            }
        }
    }
}
