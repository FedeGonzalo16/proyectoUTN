
/* Vars para funcionalidades del Navbar */
const menu = document.querySelector(".menu-list");
const listBtn = document.querySelector(".list-btn");
const canceltBtn = document.querySelector(".cancel-btn");
//
const navbar = document.querySelector(".navbar");
//
const body = document.querySelector("body");
/* Vars para funcionalidades de LA Galería */
let list = document.querySelectorAll('.list');
let itemBx = document.querySelectorAll('.itemBx');

/*  */
/* Funcionalidades del Navbar */
/*  */

listBtn.onclick = ()=> {
    menu.classList.add("active"); //agregue, el active q agregamos en css que al tocar se despliegue.
    listBtn.classList.add("hide"); // el hide q llamamos en el css, se esconda.
    body.classList.add("disabledScroll");  // para que al entrar al nav lateral q se despliega, no se pueda scrollear.
}

canceltBtn.onclick = ()=> {
    menu.classList.remove("active"); //remueva.
    listBtn.classList.remove("hide"); 
    body.classList.remove("disabledScroll");   // para que al salir del nav lateral q se despliega, se pueda scrollear.
}

/*  Para q al scrollear, el navbar cambie el tamaño y su background*/
window.onscroll = ()=> {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};

/*  */
/*  Funcionalidades del Sign Up -Sign In */
/*  */

function toggleForm(){ /* Toggle - cambio entre Sign In y Sign Up. */
    const section = document.querySelector('.sctsign');
    const container = document.querySelector('.container');

    container.classList.toggle('active');
    section.classList.toggle('active');
};


