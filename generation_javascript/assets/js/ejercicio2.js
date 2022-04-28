/* const year = document.querySelector('#year');
const btnCalcular = document.querySelector('#btnCalcular');

const yearActual = new Date().getFullYear();

btnCalcular.addEventListener('click', calcularEdad);

function calcularEdad() {
    const yearNacimiento = year.value;
    const edad = yearActual - yearNacimiento;
    console.log(edad);
} */


/* Level 1 */
/* const anioNacimiento = parseInt(prompt('Ingresa tu año de nacimiento: '));
const anioActual = 2022;

console.log(`Tienes ${anioActual - anioNacimiento} años`); */

/* Level 2 */
/* const calcular = document.getElementById('calcular');
const anioActual = 2022;

calcular.addEventListener('click', () => {
    const anioNacimiento = parseInt(document.querySelector('#anio').value);
    console.log(`Tienes ${anioActual - anioNacimiento} años`);
}); */

/* Level 3 */
const fecha = new Date();
const anioActual = fecha.getFullYear();
const mesActual = fecha.getMonth() + 1;
const diaActual = fecha.getDate();

const calcular = document.querySelector('#calcular');

calcular.addEventListener('click', calcularEdad);

function calcularEdad() {
    const fechaNacimento = document.querySelector('#fecha-nacimiento').value;
    const nacimientoDividido = fechaNacimento.split('-');
    const anioNacimiento = nacimientoDividido[0];
    const mesNacimiento = nacimientoDividido[1];
    const diaNacimiento = nacimientoDividido[2];

    if (mesNacimiento <= mesActual && diaNacimiento <= diaActual) {
        console.log(`Tienes ${anioActual - anioNacimiento} años`);
    } else {
        console.log(`Tienes ${anioActual - anioNacimiento - 1} años`);
    }
}