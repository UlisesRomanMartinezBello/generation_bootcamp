function saludar(nombre = 'panchito', apellido = '') {
    // console.log('Hola mi nombre es', nombre, apellido);
    // console.log(`Hola mi nombre es ${nombre ? 'Raul' : 'Desconocido'}`);
    // console.log('Hola mi nombre es', nombre, apellido);
    return 'Hola mi nombre es', nombre, apellido;
}
/* 
console.log(saludar('Ulises', 'Martinez'));

let funcionSaludar = saludar('Felipe', 'Maqueda');
console.log(funcionSaludar.toLowerCase());

console.log(saludar('Alberto', 'Hernandez')); */


function suma(a, b) {
    return a + b;
}

// console.log(suma(10,20));


const resta = function (a, b) {
    return a - b;
}

console.log(resta(10, 9));



const multiplication = (a, b) => a * b;

console.log(multiplication(9,9))