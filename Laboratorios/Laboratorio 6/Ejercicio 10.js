var numero = -10;
function absoluto(numero) {
  if (numero <= 0) {
    return numero * -1;
  } else {
    return numero;
  }
}

console.log(absoluto(numero));