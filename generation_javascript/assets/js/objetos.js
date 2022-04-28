const persona = new Object();
persona.name = 'John';
persona.lastName = 'Vazquez';
persona.age = 23;

console.log(persona);


const nuevaPersona = {
    nombreCompleto: {
        nombre: 'John',
        apellido: 'Vazquez'
    },
    edad: 23,
    pasaTiempos: ['nadar', 'dibujar', 'anime'],
    tieneTrabajo: true,
    saludar: () => {
        nuevaPersona.pasaTiempos.forEach(elemento => {
            console.log(elemento);
        })
    }
}

"hola".length /* Atributo o propiedad */
"hola".toLowerCase(); /* metodo */


console.log(nuevaPersona.edad);
console.log(nuevaPersona.nombreCompleto.nombre);
nuevaPersona.saludar();


const Ulises = {
    nombreCompleto: {
        nombre: "Ulises",
        apellido: "Martinez"
    },
    edad: 23,
    pasatiempos: ["ver futbol", "jugar videojuegos", "ver series"]
}

const Jonathan = {
    nombreCompleto: {
        nombre: "Yair",
        apellido: "Uriostegui"
    },
    edad: 23,
    pasatiempos: ["nadar", "dibujar", "anime"]
}

const victor = {
    nombreCompleto: {
        nombre: "Víctor Manuel",
        apellido: "Soto Alexander",
    },
    edad: 26,
    pasatiempos: ["anime", "leer", "tomar"],
}

const juan = {
    nombreCompleto: {
        nombre: "Juan",
        apellido: "Vazquez"
    },
    edad: 30,
    pasatiempos: ["coches", "animales", "música"],
}

const Mitzi = {
    nombreCompleto: {
        nom: "Mitzi",
        apellido: "Hernandez"
    },
    edad: 23,
    pasatiempos: ["jugar", "dibujar", "ver series"],
}

const Katia = {
    nombreCompleto: {
        nombre: "Katia",
        apellido: "Alvarez",
    },
    edad: 28,
    pasatiempos: ["Cine", "Musica", "Baile"],
};


const cohorteDoce = [Katia, Mitzi, juan, victor, Jonathan, Ulises];

cohorteDoce.forEach(alumno => {
    console.log(alumno.pasatiempos)
})