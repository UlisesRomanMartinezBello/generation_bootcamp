const urlTop = 'https://api.jikan.moe/v4/top/anime';
const topAnimeElement = document.getElementById('topAnime');

fetch(urlTop)
    .then(response => response.json())
    .then(animeTops => {
        const topAnime = animeTops.data.slice(0, 10)
        topAnime.forEach(animeTop => {
            const template = `<a href="#" class="list-group-item list-group-item-action">${animeTop.title}</a>`;
            topAnimeElement.innerHTML += template;
        })
    });