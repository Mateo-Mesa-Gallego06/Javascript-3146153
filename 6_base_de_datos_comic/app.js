// app.js
console.log(comic.nombreComic); // "Cuando La Tierra Calla"

const titulo = document.querySelector('.atlantis-section h1');
titulo.textContent = comic.nombreComic;

const descripcion = document.querySelector('.atlantis-section p');
descripcion.textContent = comic.descripcion;

const episodesContainer = document.querySelector('.episodes-grid');

comic.capítulos.forEach((cap, index) => {
  const card = document.createElement('div');
  card.classList.add('episode-card');

  card.innerHTML = `
    <img src="${cap.imgPortada}" alt="Episode ${index + 1}">
    <h3 class="num-epi">Episode ${index + 1}</h3>
    <h3 class="name-cap">${cap.nombreCap}</h3>
    <p class="name-cap">${cap.descripcion}</p>
    
  `;

  episodesContainer.appendChild(card);
});