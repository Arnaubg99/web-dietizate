const url = window.location.href;
const id = Number(url.split("?").slice(1));
const titulo = document.querySelector('.titulo');
const listaRestaurantes = document.querySelector('.lista-restaurantes');
const textoContainer = document.querySelector('.texto');

if(!id){
    titulo.innerHTML = "Id no encontrada.";
    document.title = "Error";
}else if(id < 1 || id > 8){
    titulo.innerHTML = "Id no válida.";
    document.title = "Error";
}else{
    const restaurantes = getRestaurantesDeDietaById(id);
    const dieta = getDietaById(id);
    titulo.innerHTML = "Restaurantes"
    if(restaurantes.length ==0){
        textoContainer.innerHTML = `No hay restaurantes de dieta ${dieta.nombre}`
    }else{
        textoContainer.innerHTML = `Restaurantes de dieta ${dieta.nombre}`
    restaurantes.forEach(restaurante => {
        let imagen;
       if(typeof restaurante.imagen == 'object'){
        imagen = restaurante.imagen[Math.floor(Math.random() * 2)]
       }else{
        imagen = restaurante.imagen
       }
        crearCard(imagen, restaurante.nombre, `restaurante.html?${restaurante.id}`, listaRestaurantes)
    });
    }
}
