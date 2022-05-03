
//Variables en la parte inicial del documento para evitar errores
const $padre = document.querySelector(".padre") //se selecciona la clase o id al que se agregará el elemento

// # llamar un id; . llamar una clase

// crear un elemento nuevo
//la forma más correcta
const $parr = document.createElement("p"); //Se crea el elemento
$parr.textContent = "Lorem ipsum" //Se agrega el contenido al elemento
$parr.textContent += "Lorem ipsum" 
$parr.textContent += "Lorem ipsum" 
$padre.appendChild($parr) //Se selecciona el elemento que se quiere agregar al html; no aparecerá en el html pero sí en los elemento del navegador

//Agregar elementos innerHTML

const $cuadro =document.querySelector(".cuadro");
$cuadro.innerHTML = ""; //inicializar el contenido del elemento

$cuadro.innerHTML= `
                    <a href= "#"> Este es un enlace</a>
                    <ol>
                        <li>Elemento 1</li>
                        <li>Elemento 2</li>
                        <li>Elemento 3</li>
                        </ol>
                    `;

const estaciones= ["Primavera", "Verano", "Otoño", "Invierno"];
const $lista = document.createElement("ul");
estaciones.forEach(elemento =>{
    const $li = document.createElement("li");
    $li.textContent = elemento;
    $lista.appendChild($li)
})
$cuadro.appendChild($lista)
/* document.body.appendChild($lista) */

////////////////////////////////////////////////
const continentes = ["África", "América", "Asia", "Oceanía", "Europa"];

const $ol = document.createElement("ol");
$cuadro.appendChild($ol)
continentes.forEach(continente => {$ol.innerHTML+= `<li>${continente}</li>`});
