const parrafo = document.querySelector('#parrafo');
const content = document.querySelector('#content');

console.log(parrafo.nodeName); // Devuelve en mayuscula el nombre del nodo (elemento HTML)

console.log(parrafo.textContent); // Devuelve el texto del elemento se puede modificar con la misma propiedad del elemento

content.innerHTML = '<h1>Hola</h1>'; // Nos permite insterar HTML en un elemento

console.log(content.innerHTML);
console.log(content.textContent);


function crearElemento() {
    const image = document.createElement('img');
    image.src = 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU';
    content.appendChild(image);
}

crearElemento();
