var contador = 0;
var numero = 1;

function ocurrencia(array,numero){



    for (let i = 0; i < array.length; i++) {
        if(array[i] == numero){
            contador = (contador + 1) ;

        }
        
        
    }

    console.log("la ocurrencia del numero " + numero + " es: " + contador);

}

ocurrencia([1,1,2,2,4,7,6,8],numero);