package org.generation;
import org.junit.jupiter.api.*;

public class ApplicationTest {
    @Test
    public void saludoTest() {
        Application saludo = new Application();
        Assertions.assertEquals("Hola Mundo!", saludo.saludo());
    }

    @Test
    public void saludoStaticTest() {
        Assertions.assertEquals("Saludo Static", Application.saludoStatic());
    }


}