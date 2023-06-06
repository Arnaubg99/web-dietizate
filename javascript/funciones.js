function crearCard(imagen, texto, url, elementoPadre){
    const nuevaCard = crearElemento('a', ['card'], [atributo1={llave: "href", valor: url}], undefined, elementoPadre, true)
    crearElemento('img', ['card-img'], [atributo1 ={llave: 'src', valor: imagen}], undefined, nuevaCard)
    crearElemento('p', ['card-texto'], undefined, texto, nuevaCard)
}

function crearElemento(tipo, clases, atributos, texto, elementoPadre, returnNecessario){
    const nuevoElemento = document.createElement(tipo);
    if(clases){
        clases.forEach(clase => {
            nuevoElemento.classList.add(clase);
        });
    }
    if(atributos){
        atributos.forEach(atributo => {
            nuevoElemento.setAttribute(atributo.llave, atributo.valor)
        });
    }
    if(texto){
        nuevoElemento.innerHTML = texto;
    }
    if(elementoPadre){
        elementoPadre.appendChild(nuevoElemento);
    }
    if(returnNecessario){
        return nuevoElemento;
    }
}