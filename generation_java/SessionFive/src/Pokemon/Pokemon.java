package Pokemon;

public class Pokemon {
    private int id;
    private int age;
    private int level;
    private String name;
    private boolean evolution;

    public Pokemon(int id, int age, int level, String name, boolean evolution) {
        this.id = id;
        this.age = age;
        this.level = level;
        this.name = name;
        this.evolution = evolution;
    }

    public void eat() {
        System.out.println(name + " is eating");
    }

    public void attack() {
        System.out.println(name + " is attack");
    }

    public void sleep() {
        System.out.println("zZz");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
