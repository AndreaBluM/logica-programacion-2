
console.log("Ingresa la temperatura actual en grados Celsius: ");

let temperatura = document.getElementById("celsius");
let boton = document.querySelector("#convertirBoton");
let resultado = document.querySelector("#resultado");

boton.addEventListener("click", function() {
    let celsiusInt = parseFloat(temperatura.value);
    let fahrenheit = (celsiusInt * 9/5) + 32;
    resultado.textContent = `La temperatura en grados Fahrenheit es: ${fahrenheit}`;
});

console.log(celsiusInt);
