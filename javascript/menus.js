const listaMenus = document.querySelector('.lista-menus')
getDietas();

dietas.forEach(dieta => {
    crearCard(dieta.imagen, `Menú dieta ${dieta.nombre}`, `menu.html?${dieta.id}`, listaMenus)
 });