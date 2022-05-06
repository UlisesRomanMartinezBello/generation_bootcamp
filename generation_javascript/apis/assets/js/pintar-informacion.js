const idInfo = window.location.href.split('=').pop();
const url = `https://api.jikan.moe/v4/anime/${idInfo}`;
const animeElement = document.getElementById('animeInfo');


fetch(url)
    .then(response => response.json())
    .then(datosAnime => {
        const datosNecesarios = {
            id: datosAnime.data.mal_id,
            image: datosAnime.data.images.jpg.image_url,
            synopsis: datosAnime.data.synopsis,
            nombre: datosAnime.data.title,
        };

        const template = `<div class="col">
                                <img src="${datosNecesarios.image}" alt="" class="img-fluid">
                            </div>
                        <div class="col">
                            <h1>${datosNecesarios.nombre}</h1>
                            <p>${datosNecesarios.synopsis}</p>
                        <button type="button" id="agregarFavorito" class="btn btn-dark">Agregar a favorito</button>
                    </div>`;

        animeElement.innerHTML = template;

        const agregarFavorito = document.getElementById('agregarFavorito');
        agregarFavorito.addEventListener('click', () => {
            const datos = {
                id: datosAnime.data.mal_id,
                image: datosAnime.data.images.jpg.image_url,
                nombre: datosAnime.data.title,
            };

            if (localStorage.getItem('favoritos')) {
                const favoritos = JSON.parse(localStorage.getItem('favoritos'));
                favoritos.push(datos);
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
            } else {
                const favoritos = [];
                favoritos.push(datos);
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
            }

        });

    });



