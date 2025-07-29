const imagen = document.querySelector('.moticos');
const boton1 = document.querySelector('.boton1');
const boton2 = document.querySelector('.boton2');
const boton3 = document.querySelector('.boton3');


boton1.addEventListener('click', () => {
  imagen.style.filter = 'grayscale(100%)';
});


boton2.addEventListener('click', () => {
  imagen.style.filter = 'blur(5px)';
});


boton3.addEventListener('click', () => {
  imagen.style.transform = 'scale(1.5) rotate(10deg)';
});