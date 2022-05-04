const url = 'https://dog.ceo/api/breeds/list/all';
const listaCompleta = document.querySelector('ul');

fetch(url)
    .then(response => response.json())
    .then(
        result => result.message.terrier.forEach(dog => {
        const listaPerro = `<li class="list-group-item">${dog}</li>`;
        listaCompleta. innerHTML += listaPerro;
    }));