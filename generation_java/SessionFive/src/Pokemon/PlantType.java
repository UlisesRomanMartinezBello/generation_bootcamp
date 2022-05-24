package Pokemon;

public class PlantType extends Pokemon {
    int leavelsNumber;

    public PlantType(int id, int age, int level, String name, boolean evolution, int leavelsNumber){
        super(id,age,level,name,evolution);
        this.leavelsNumber = leavelsNumber;
    }

    public void poison() {
        System.out.println(super.getName() + " is poison");
    }

    public void paralyze() {
        System.out.println(super.getName() + " is paralyze");
    }

    public int getLeavelsNumber() {
        return leavelsNumber;
    }

    public void setLeavelsNumber(int leavelsNumber) {
        this.leavelsNumber = leavelsNumber;
    }
}
