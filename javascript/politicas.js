const botonAceptarPoliticas = document.querySelector('.boton-aceptar-politicas');
const popupPoliticas = document.querySelector('.popup-politicas');

botonAceptarPoliticas.addEventListener('click', ()=>{
    popupPoliticas.style.right = '-100%';
    setTimeout(()=>{popupPoliticas.style.display = 'none'}, 500)
});