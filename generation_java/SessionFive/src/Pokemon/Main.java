package Pokemon;

public class Main {
    public static void main(String[] args) {
        // Pokemon chikorita = new Pokemon(152,1,20,"Chikorita", false);
        // chikorita.eat();
        // chikorita.attack();
        // chikorita.sleep();

        PlantType chikorita = new PlantType(152,1,20,"Chikorita", false, 1);
        chikorita.eat();
        chikorita.attack();
        chikorita.sleep();
        chikorita.poison();
        chikorita.paralyze();
    }
}
