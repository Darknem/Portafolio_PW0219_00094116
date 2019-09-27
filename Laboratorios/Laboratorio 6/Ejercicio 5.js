function palindroma(palabra) {
    var Palindrome = true;
    var original = palabra.split("");
    var invertido = palabra.split("").reverse();
  
  
    for (var i = 0; i < original.length; i++) {
      if (invertido[i] != original[i]) {
        console.log("no es palindrome");
        Palindrome = false;
        break;
      }
  
      if (Palindrome == true) {
        console.log("es palindrome");
      }
    }  
    invertido
  }
  
  palindroma("anona");
