let arreglo = new Array(); 

for (let i = 0; i < 20; i++) {
    arreglo.push(aleatorio = (Math.floor(Math.random()*100)+1));
   
}
function rand(num){
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] == num){
            console.log("¡Adivinaste el número!");
        }else{
            console.log("Respuesta incorrecta")
        }
        
        
    }

}

rand(10);

 
