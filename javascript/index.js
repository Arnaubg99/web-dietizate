const estrellas = document.querySelectorAll(".star");
const popupStarRating = document.querySelector('.popup-star-rating');

estrellas.forEach(estrella =>{
    estrella.addEventListener('mouseover', ()=>{
        console.log(estrella.getAttribute("numEstrella"))
        const numEstrella = estrella.getAttribute("numEstrella");
        let num = 0; 
        while(num <= numEstrella){
            estrellas[num].classList.add('active')
            num++;
        }
    })
    estrella.addEventListener('mouseout', ()=>{
        estrellas.forEach(estrella=>{
            estrella.classList.remove('active')
        })
    })
    estrella.addEventListener('click', ()=>{
        popupStarRating.style.right = '-100%';
        setTimeout(()=>{popupStarRating.style.display = 'none'}, 500)
    });
})