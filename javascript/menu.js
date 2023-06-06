const url = window.location.href;
const id = Number(url.split("?").slice(1));
const body = document.querySelector('body');
const tituloMenu = document.querySelector('.titulo-menu');
const imgMenu = document.querySelector('.img-menu');
const descargarImgMenu = document.querySelector('.descargar-img-menu');
const botonDescargarMenu = document.querySelector('.boton-descargar-menu');
const dieta = getDietaById(id);

if(!dieta){
    tituloMenu.innerHTML = "La id no es correcta.";
    document.title = "Error";
}else{
    document.title = `Menú ${dieta.nombre}`
    body.style.backgroundImage = `url(${dieta.imagen})`;
    tituloMenu.innerHTML = dieta.nombre;
    imgMenu.src = dieta.imagen_menu;
    botonDescargarMenu.download = `${dieta.nombre}.png`;
    botonDescargarMenu.href = dieta.imagen_menu;
}

