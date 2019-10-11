
function ordenar(lista){
    for(var i=0; i<lista.length;i++){
        for (var j =0;j<lista.length-1;j++){
            if(lista[j+1]<lista[j]){
                var aux = lista[j+1];
                lista[j+1]=lista[j];
                lista[j] = aux
            }
        }
    }
    return lista;
}

console.log(ordenar([10,9,8,7,6,5,4,3,2,1]));
