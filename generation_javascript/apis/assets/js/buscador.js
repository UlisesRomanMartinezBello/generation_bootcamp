const formulario = document.querySelector('#formBusqueda');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const busqueda = document.querySelector('#inputBusqueda').value;
    window.location.href = `http://127.0.0.1:5500/busqueda.html?nombre=${busqueda}`;
});