const form = document.querySelector('.formulario');
const card = document.querySelector('#content');

form.addEventListener('submit', e => {
    e.preventDefault();
    const datos = Object.fromEntries(
        new FormData(e.target)
    );
    crearElemento(datos.url, datos.texto);
});


function crearElemento(url, texto) {
    const image = document.createElement('img');
    image.src = url;
    image.alt = texto;
    content.appendChild(image);
}