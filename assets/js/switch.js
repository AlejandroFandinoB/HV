const links = document.querySelectorAll(".alternative-style");

/* ===== color ===== */

// función donde trae el color 
function setActiveStyle(color) {
    for (let i = 0; i < links.length; i++) {
        if (color == links[i].getAttribute("title")) { // trae el color del 'li' == link trae el title 
            links[i].removeAttribute("disabled");
            
            // Guardar en localstorage
            localStorage.setItem('tema', color);
        } else {
            links[i].setAttribute("disabled", "disabled");
        }
    }
}
// Obtenemos el color actual 
if (localStorage.getItem('tema')) {
    const color = localStorage.getItem('tema');
    for (let i = 0; i < links.length; i++) {
        if (color == links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled");
            localStorage.setItem('tema', color);
        } else {
            links[i].setAttribute("disabled", "disabled");
        }
    }
}
/* ===== fin color ===== */


/* ==== spin para ocultar la barra de colores ==== */
const spin = document.querySelector(".toggle-style-switcher");

spin.addEventListener('click',()=>{
    document.querySelector(".switcher").classList.toggle("open");
})
/* ==== fin spin para ocultar la barra de colores ==== */


/* ==== boton para cambio de fondo ==== */
const boton = document.querySelector(".switch");

boton.addEventListener("click",()=>{
    document.querySelector(".switch").classList.toggle("active");
    document.body.classList.toggle("dark"); //body
    document.querySelector(".nav").classList.toggle("dark") //nav

    // guardamos en localstorage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('fondo', 'true');
    }
    else{
        localStorage.setItem('fondo', 'false');
    }
})

// obtenemos el modo actual 
if(localStorage.getItem('fondo')=='true'){
    document.body.classList.add("dark"); //body
    document.querySelector(".nav").classList.add("dark") //nav
}else{
    document.body.classList.remove("dark");
}
/* ==== fin para cambio de fondo ==== */