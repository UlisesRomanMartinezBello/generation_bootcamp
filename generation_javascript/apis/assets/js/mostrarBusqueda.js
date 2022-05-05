let busquedaInf = window.location.href.split('=')[1];
const url = `https://api.jikan.moe/v4/anime?q=${busquedaInf}&order_by=popularity`;
const datosBusquedaElemento = document.querySelector('#datosBusqueda');

fetch(url)
    .then(response => response.json())
    .then(animeSearch => {

        animeSearch.data.forEach(anime => {
            const datosNecesarios = {
                nombre: anime.title,
                imagen: anime.images.jpg.image_url
            };

            const template = `<div class="col-3 mb-4">
                                <div class="card">
                                    <img src="${datosNecesarios.imagen}" class="card-img-top" alt="${datosNecesarios.imagen}">
                                    <div class="card-body">
                                        <h5 class="card-title">${datosNecesarios.nombre}</h5>
                                    </div>
                                </div>
                            </div>`;

            datosBusquedaElemento.innerHTML += template;
        });
    });