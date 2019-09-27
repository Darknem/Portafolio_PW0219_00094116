
function area(rad){
    var area= (Math.PI)*(rad*rad);
    if(rad<=0){
        return -1;
    }
    else{
        return area;
    }
}

var numero= 3;
console.log(area(numero));