/* CODIGO FINAL */
let semana = document.querySelectorAll(".semana");
let flag = false;
let seleccion;

for (let index = 0; index < semana.length; index++) {
    semana[index].addEventListener("click", () => {
        let dia_ruta = semana[index].getAttribute("href").split('#');
        let dia_id = dia_ruta[dia_ruta.length-1];
        
        let dia_seleccionado = document.getElementById(dia_id);
        dia_seleccionado.classList.toggle("hide");

        if (flag) {
            seleccion.classList.toggle("hide");
        }
        
        seleccion = dia_seleccionado;
        flag = true;
    });
};

semana[0].click();
