const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
const cards = document.querySelector('#cards');

fetch(url)
    .then(response => response.json())
    .then(result => result.forEach(color => {
        cards.innerHTML += `
        <div class="col mb-4">
            <div class="card">
                <img src="${color.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${color.id}</h5>
                        <p class="card-text">${color.title}</p>
                    </div>
                </div>
            </div>
        </div>`;
    }));