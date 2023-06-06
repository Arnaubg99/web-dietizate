const listaDietas = document.querySelector('.lista-dietas')
getDietas();

dietas.forEach(dieta => {
    crearCard(dieta.imagen, `Dieta ${dieta.nombre}`, `dieta.html?${dieta.id}`, listaDietas)
 });