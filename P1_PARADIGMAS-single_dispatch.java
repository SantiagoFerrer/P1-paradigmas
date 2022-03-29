import java.util.*;
import java.lang.*;
import java.io.*;

abstract class Animal{
    public abstract void fazsom();
}

class Gato extends Animal{
    public void fazsom(){
        System.out.println("meow");
    }
}

class Cachorro extends Animal{
    public void fazsom(){
        System.out.println("woof");
    }
}

class vs{
    public static void main(String[] args){
        Animal cachorro = new Cachorro();
        Animal gato = new Gato();
        cachorro.fazsom();
        gato.fazsom();
    }
}