//Ejercicio 2

let diario = [];
let eventos = [];


document.getElementById("btnEvento").onclick = agregarEvento;
// Funcion para agregar eventos de un dia
function agregarEvento(){
    let unEvento = document.getElementById("evento");
    eventos.push(unEvento.value);
    unEvento.value = "";
}


document.getElementById("btnSubmit").onclick = agregarDia;
// Funcion para agregar el dia al journal
function agregarDia() {
    let accidente;
    let radioBTNS = document.getElementsByName('accident');

    for (let i = 0; i < radioBTNS.length; i++) {
        if (radioBTNS[i].checked) {
            accidente = radioBTNS[i].value;
        }
    } 

    diario.push({eventos, accidente});
    agregarFila(eventos, accidente);
    eventos = [];
}

//Agregar en HTML
let agregarFila = (evento, accidente) => {
    let tabla = document.getElementById('registroBody');
    let fila = document.createElement("tr");

    fila.className = "dia_insertado";
    fila.innerHTML = `
          <td class="registro-event"> ${evento} </td>
          <td class="registro-accedent"> ${accidente} </td>
      `;
  
    tabla.appendChild(fila);
};