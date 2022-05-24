package Calculator;

public class Calculator {
    // Propieties
    private int a;
    private int b;
    private int c;
    private int result;

    // Constructor Method
    public Calculator(int a, int b) {
        this.a = a;
        this.b = b;
    }

    // Method overloading
    public Calculator(int a, int b, int c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public void add(int a, int b) {
        result = a + b;
        System.out.println("The result is " + result);
    }

    public void add(int a, int b, int c) {
        result = a + b + c;
        System.out.println("The result is " + result);
    }

    // Getters & Setters
    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public int getB() {
        return b;
    }

    public void setB(int b) {
        this.b = b;
    }
}
