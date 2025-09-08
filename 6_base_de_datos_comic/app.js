/* // Insertar datos dinámicos del cómic
document.getElementById("comic-title").textContent = comic.nombreComic;
document.getElementById("comic-description").textContent = comic.descripcion;

// Generar episodios
const episodesContainer = document.getElementById("episodes-container");
comic.capítulos.forEach(cap => {
  const card = document.createElement("div");
  card.classList.add("episode-card");
  card.innerHTML = `
    <img src="${cap.imgPortada}" alt="${cap.nombreCap}">
    <h3>${cap.nombreCap}</h3>
    <p>${cap.descripcion}</p>
  `;
  episodesContainer.appendChild(card);
}); */







comic.capítulos.forEach(cap => {
    const li = document.createElement("li");
    li.innerHTML = ` 
     <p>${cap.nombreCap}</p>
    <img src="${assets/imagen1.jpg}"width="150 alt="">

`
listaCaps.appendChild(li);
});

