const color = document.querySelector("#inputColor")
console.log(color);

color.addEventListener("change", function (e) { 
    document.body.style.backgroundColor = e.target.value 
});


const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const datos = Object.entries(
    );

    console.log(datos);
});