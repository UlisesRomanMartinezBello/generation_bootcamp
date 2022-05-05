/* const url = "https://dog.ceo/api/breeds/image/random";
const imagen = document.getElementById('imagenPerrito');
const imagen2 = document.getElementById('imagenPerrito2');
const btnMichi = document.querySelector('.btn-michi');
console.log(btnMichi);


btnMichi.addEventListener('click',(e)=>{
    e.preventDefault;
    fetch(url).then(respuesta => respuesta.json()).then(datos =>{
        console.log(datos);
        imagen.src = datos.message;
    });
}); */


/* const url = 'https://api.thecatapi.com/v1/images/search';
const btnGatos = document.querySelector('#btnGato');
const imgGato = document.querySelector('#imgGato');


btnGatos.addEventListener('click', () => {
    fetch(url)
    .then(response => response.json())
    .then(result => {
        imgGato.src = result[0].url;
    })
}); */

const url = "https://api.thecatapi.com/v1/images/search";
const imagen = document.getElementById('imgGatito');
const boton = document.getElementById('botonGato');

boton.addEventListener('click', gato);

async function gato(){
    const infoGatitos = await fetch(url);
    const gatito = await infoGatitos.json();
    imagen.src = gatito[0].url;
}