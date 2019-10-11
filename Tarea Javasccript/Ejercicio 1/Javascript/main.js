//Ejercicio 1

//Funcion que permite desplegar el menú de opciones en, por ejemplo, versión iPhone 
function desplegarMenu() {
    const esconder = document.getElementById("menu");
    esconder.classList.toggle("hide-mobile");
    
    const menu = document.getElementsByClassName('fas fa-bars')[0];
    menu.classList.toggle("hide-mobile");
    
    const cerrar = document.getElementsByClassName("fas fa-times")[0];
    cerrar.classList.toggle("hide-mobile");
}


let a = document.querySelector(".options");
a.addEventListener('click', desplegarMenu, false);