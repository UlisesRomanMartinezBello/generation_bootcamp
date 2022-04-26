// Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".


function invertirPalabra(palabra) {
    if(typeof palabra != "string") return console.warn('Ingresa un texto');
    if(palabra.length <= 1) return console.warn('Ingresa un texto');
    return palabra.split("").reverse().join("");
}

console.log(invertirPalabra('Hola'));