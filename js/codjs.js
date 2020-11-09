var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

var numero = parseInt(prompt("Introduzca un número entre 0 y 25:", ""));


if (numero >= 0 && numero <= 25) {
    var letraIngresada = prompt("Introduzca una letra", "").toUpperCase();
    if (letraIngresada == letras[numero]) {
        alert("Gano")
    } else {
        alert("Ha perdido")
    }
} else {
    alert("número invalido")
}