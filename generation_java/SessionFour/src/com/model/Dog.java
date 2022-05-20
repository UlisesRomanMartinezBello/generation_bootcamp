package com.model;

import java.util.*;

public class Dog {
    String name;
    String race;
    String size;
    int age;
    String colour;


    private int id = 0;
    private static int counter = 0;

    private static Map<Integer, String> human = new HashMap<Integer, String>();

    public Dog (String name, String race, String size, int age, String colour) {
        this.name = name;
        this.race = race;
        this.size = size;
        this.age = age;
        this.colour = colour;
        this.id = ++Dog.counter;
    }

    @Override
    public String toString() {
        return "Dog[" + "name=" + name + ", race=" + race + ", size=" + size + ", age=" + age + ", colour=" + colour + ", id=" + id + "]";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getColour() {
        return colour;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public void setHuman(String value) {
        Dog.human.put(this.id, value);
    }

    public static String searchHuman(Integer key) {
        return "The name of the human is: " + human.get(key);
    }


    public void eat() {
        System.out.println(this.name + " is eating");
    }

    public void sleep() {
        System.out.println(this.name + " is sleeping");
    }

    public void run() {
        System.out.println(this.name + " is running");
    }

    public void sit() {
        System.out.println(this.name + " is sitting");
    }
}