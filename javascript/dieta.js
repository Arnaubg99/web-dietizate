const url = window.location.href;
const id = Number(url.split("?").slice(1));
const tituloDieta = document.querySelector('.titulo-dieta');
const descripcionDieta = document.querySelector('.descripcion-dieta');
const imgDieta = document.querySelector('.img-dieta');
const botonBeneficios = document.querySelector('.boton-beneficios');
const botonMenu = document.querySelector('.boton-menu');
const botonRestaurantes = document.querySelector('.boton-restaurantes');
const popupBeneficios = document.querySelector('.popup-beneficios');
const popupLista = document.querySelector('.popup-lista');

if(!id){
    document.title = "Error";
    tituloDieta.innerHTML = "Id no encontrada.";

}else if(id < 1 || id > 8){
    document.title = "Error";
    tituloDieta.innerHTML = "Id no válida.";
}else{
    const dieta = getDietaById(id)
    document.title = dieta.nombre;
    tituloDieta.innerHTML = dieta.nombre;
    descripcionDieta.innerHTML = dieta.descripcion;
    imgDieta.src = dieta.imagen
    imgDieta.alt = dieta.nombre
    let clickBeneficios = false;
    botonBeneficios.addEventListener('click', ()=>{
        if(!clickBeneficios){
            popupBeneficios.style.opacity = 1;
            popupBeneficios.style.display = 'block';
            dieta.beneficios.forEach(beneficio => {
            crearElemento('li', ['beneficio'], undefined, beneficio, popupLista, false);
            clickBeneficios = true;
        })
        }else{
            popupBeneficios.style.opacity = 0;
            popupBeneficios.style.display = 'none';
            const beneficios = document.querySelectorAll('.beneficio');
                beneficios.forEach(beneficio =>{
                beneficio.parentNode.removeChild(beneficio)
            })
            clickBeneficios = false;
        }
    })
    botonMenu.href = `menu.html?${dieta.id}`
    botonRestaurantes.href = `restaurantes.html?${dieta.id}`
}

