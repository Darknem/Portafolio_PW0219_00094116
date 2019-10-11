var cString = 0;
var cNumber = 0;
var cBool = 0;
var cNull   = 0;
var cSymbol  = 0;
var cUndefined  = 0;

function contador(array){
    for (let i = 0; i < array.length; i++) {
        if(typeof(array[i]) == 'string'){
            cString = (cString + 1);

        }
        if(typeof array[i] == 'number'){
            cNumber = (cNumber + 1);
            
        }
        if((typeof array[i]) == 'boolean'){
            cBool= (cBool + 1);

        }
        if(typeof array[i] == 'null'){
            cNull = (cNull + 1);
        
        }
        if(typeof(array[i]) == 'symbol'){
            cSymbol = (cSymbol + 1);
    
        }
        if(typeof(array[i]) == 'undefined'){
            cUndefined  = (cUndefined + 1);
        
        }
    }

    //Mostrando los arreglos
    console.log("cantidad de String =" + cString);
    console.log("/ncantidad de Number =" + cNumber);
    console.log("/ncantidad de Boolean =" + cBool);
    console.log("/ncantidad de Null =" + cNull);
    console.log("/ncantidad de Symbol =" + cSymbol);
    console.log("/ncantidad de Undefined =" + cUndefined);

}

//Probando funcionalidad
contador([1,2,9.4, 'web',7, 'programacion', null, undefined]);
