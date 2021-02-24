/* ====== Menu ====== */

const nav = document.querySelector(".nav__list");
// console.log(nav)
const linksNav = nav.querySelectorAll("li")
// console.log(linksNav)

for(let i=0; i<linksNav.length; i++){
    // console.log(linksNav[i])
    const a = linksNav[i].querySelector("a");
    // console.log(a);
    a.addEventListener("click",function(){
        for(let j=0; j<linksNav.length; j++){
            linksNav[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        if(window.innerWidth<1200){
            asideSectionTogglerBtn()
        }
    })
}

/* ====== Fin Menu ====== */


/* ====== Menu Hamburguesa ====== */
const NavbtnToggler = document.querySelector(".nav__toggle");
// console.log(NavbtnToggler)
const aside = document.querySelector(".aside");
// console.log(aside);
const section = document.querySelector(".section")
// console.log(section)

NavbtnToggler.addEventListener("click",()=>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    // NavbtnToggler.classList.toggle("open"); 

}

    


/* ====== Fin Menu Hamburguesa ====== */



