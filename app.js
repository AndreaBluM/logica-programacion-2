
console.log("Ingresa la temperatura actual en grados Celsius: ");

let temperatura = document.getElementById("celsius");
let boton = document.querySelector("#convertirBoton");
let resultado = document.querySelector("#resultado");
let resultadoKelvin = document.querySelector("#resultadoKelvin");

boton.addEventListener("click", function() {
    let celsiusInt = parseFloat(temperatura.value);
    let fahrenheit = (celsiusInt * 9/5) + 32;
    resultado.textContent = `La temperatura en grados Fahrenheit es: ${fahrenheit}`;

    let kelvin = celsiusInt + 273.15;
    resultadoKelvin.textContent = `La temperatura en grados Kelvin es: ${kelvin}`;
});

console.log(celsiusInt);
