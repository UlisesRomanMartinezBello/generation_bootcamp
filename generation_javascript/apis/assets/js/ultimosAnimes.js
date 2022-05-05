const url = 'https://api.jikan.moe/v4/seasons/now';
const cardsUltimosAnimes = document.getElementById('ultimosAnimes');

fetch(url)
    .then(response => response.json())
    .then(datos => {
        const ultimosAnimes = datos.data.slice(0, 16);
        ultimosAnimes.forEach(anime => {

            console.log(anime)

            const datosAnimes = {
                nombre: anime.title,
                imagen: anime.images.webp.image_url,
                id: anime.mal_id,
                sinopsis: anime.synopsis,
            };

            const template = `<div class="col mb-4">
                                <div class="card">
                                    <img src="${datosAnimes.imagen}" class="card-img-top" alt="${datosAnimes.imagen}">
                                    <div class="card-body">
                                        <h5 class="card-title">${datosAnimes.nombre}</h5>
                                    </div>
                                </div>
                            </div>`;

            cardsUltimosAnimes.innerHTML += template;

        });
    });