var suma = 0;
var promedio;
function sumar(array){
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];       
    }
    promedio = suma/array.length;

    console.log("las suma es: " + suma);
    console.log("el promedio es: " + promedio);

}

sumar([2,4,6,8]);