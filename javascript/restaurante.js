const url = window.location.href;
const id = Number(url.split("?").slice(1));
const texto = document.querySelector('.texto');
const tituloRestaurante = document.querySelector('.titulo-restaurante');
const direccionRestaurante = document.querySelector('.direccion-restaurante');
const descripcionRestaurante = document.querySelector('.descripcion-restaurante');
const imagenRestaurante = document.querySelector('.imagen-restaurante');


if(!id){
    document.title = "Error";
    texto.innerHTML = "Id no encontrada.";

}else if(id < 1 || id > 9){
    document.title = "Error";
    texto.innerHTML = "Id no válida.";
}else{
    const restaurante = getRestauranteById(id);
    document.title = restaurante.nombre;
    texto.innerHTML = restaurante.tipo;
    tituloRestaurante.innerHTML = restaurante.nombre;
    direccionRestaurante.innerHTML = restaurante.direccion;
    descripcionRestaurante.innerHTML = restaurante.descripcion;
    imagenRestaurante.alt = restaurante.nombre; 
    if(typeof restaurante.imagen == 'object'){
        imagenRestaurante.src = restaurante.imagen[Math.floor(Math.random() * 2)]
       }else{
        imagenRestaurante.src  = restaurante.imagen
       }
}
