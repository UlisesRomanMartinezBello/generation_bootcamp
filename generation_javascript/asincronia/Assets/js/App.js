const personas = [
    { name: 'Ulises', edad: 23 },
    { name: 'Elise', edad: 21 },
    { name: 'Juan', edad: 19 }
];


function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(personas)
        }, 3000)
    });
}

console.log(obtenerDatos());

obtenerDatos().then(() => {
    console.log(personas);
})


async function obtenerDatosAsync() {
    const datos = await obtenerDatos();
    console.log(datos);
}

obtenerDatosAsync();