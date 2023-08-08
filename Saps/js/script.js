//Variables

const btnCierra = document.querySelector('.btn-cierra');
const btnAdelanta = document.querySelector('.btn-adelanta');
const btnRestrocede = document.querySelector('.btn-retrocede');
const imagenes = document.querySelectorAll('.galeria img');
const lightbox = document.querySelector('.contenedor-principal');
const imagenActiva = document.querySelector('.imagen-activa');
let indiceImagen = 0;

//Abre el Lightbox

const abreLightbox = (event) =>{
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imagenes).indexOf(EventTarget);
};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
});

imagenes.forEach((imagen) => {imagen.addEventListener('click', abreLightbox);});

//Cierra el lightbox


//adelantar la imagen

// retrocede la imagen