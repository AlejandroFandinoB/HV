const portafolioFiltro = document.querySelector(".portafolio__filtro");
const buttons = portafolioFiltro.children;
const portafolioItems = document.querySelectorAll(".portafolio__item");
const totalItems=portafolioItems.length;
// console.log(portafolioFiltro)
// console.log(buttons)
// console.log(portafolioItems);
// console.log(totalItems)

for(let i=0; i<buttons.length; i++){
    // console.log(buttons[i]);
    buttons[i].addEventListener('click',function(){
        // console.log(this.innerHTML);
        portafolioFiltro.querySelector(".active").classList.remove("active");
        this.classList.add("active"); // button[i].classList.add()
        
        
        const valorFiltrado = this.getAttribute('data-filter');
        // console.log(valorFiltrado);
        for(let j=0; j<totalItems; j++){
            if(valorFiltrado === portafolioItems[j].getAttribute("data-category")){
                portafolioItems[j].classList.remove("hide");
                portafolioItems[j].classList.add("show");
            }
            else{
                portafolioItems[j].classList.remove("show");
                portafolioItems[j].classList.add("hide");
            }
            if(valorFiltrado === "todo"){
                portafolioItems[j].classList.remove("hide");
                portafolioItems[j].classList.add("show");
            }
        }
    })
}

/* ================ lightbox ================= */
// const lightbox = document.querySelector(".lightbox");
// const lightboxImg = document.querySelector(".lightbox-img");
// const lightboxText = document.querySelector(".lightbox-caption-text");
// const lightboxCounter = document.querySelector(".lightbox-caption-counter");
// const cerrarLightbox = document.querySelector(".lightbox-close");
// // console.log(cerrarLightbox);

// let itemIndex = 0;
// for(let i=0; i<totalItems ; i++){
//     // console.log(portafolioItems[i]);
//     portafolioItems[i].addEventListener("click",function(){
//         // console.log(i)
//         itemIndex = i;
//         cambiarItem();
//         toggleLightbox();
//     })
// }

// // función para agregar la clase 'open'
// function toggleLightbox(){
//     lightbox.classList.toggle("open");
// }

// // función para cambiar la imagen, se obtiene la imagen con su atributo src, despues se obtiene el text y el contador
// function cambiarItem(){
//     imgSrc = portafolioItems[itemIndex].querySelector(".portafolio-inner-img img").getAttribute("src");
//     console.log(imgSrc);
//     lightboxImg.src=imgSrc;
//     // console.log(lightboxImg.src)
//     lightboxText.innerHTML = portafolioItems[itemIndex].querySelector("h4").innerHTML;
//     lightboxCounter.innerHTML = (itemIndex+1) + " de " + totalItems;
// }

// // función para cambiar el item con la flecha del lado derecho
// function nextItem(){
//     if(itemIndex==totalItems-1){
//             itemIndex = 0;
//     }
//     else{
//         itemIndex++;
//     }
//     // console.log(itemIndex);
//     cambiarItem();
// }

// // función para cambiar el item con la flecha del lado izquierdo
// function prevItem(){
//     if(itemIndex==0){
//             itemIndex = totalItems-1;
//     }
//     else{
//         itemIndex--;
//     }
//     // console.log(itemIndex);
//     cambiarItem();
// }

// // cerrar el item del lightbox
// lightbox.addEventListener('click', function(event){
//     // console.log(event.target)
//     if(event.target === cerrarLightbox || event.target ===  lightbox){
//         toggleLightbox();
//     }
// })

/* ================ Fin lightbox ================= */
