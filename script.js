let libro = ["CARTA", "TORTA", "MAPLE", "PERLA", "PLATO", "MULTA", "TECLA", "TECHO"];
let maxletras = "Introducir que contenga 5 caracter!!";
let indice = Math.floor(Math.random() * libro.length);
let bgColor = { amarillo: "#f3c237", verde: "#79b851", gris: "#a4aec4" }
let texColor = ["verde", "amarillo", "gris"];
let texFinal = ["<h1>GANASTE!😀</h1>", "<h1>PERDISTE!😖</h1>"];
let iniTex = "Esto se ejecuta solo cuando se carga la pagina web";
let intentos = 5;
let secreTex=libro[indice];
// URL de la API de secreTexs aleatorias en español con longitud 5
//const apiUrl = 'https://random-word-api.herokuapp.com/word?lang=es&length=5';
const button = document.getElementById("guess-button");

window.addEventListener('load', init);
button.addEventListener("click", intentar);

// Hacer una solicitud usando el método fetch.  
//fetch(apiUrl)
//    .then(response => {// Verificar si la solicitud fue exitosa (código de estado 200-299)
//        if (!response.ok) { throw new Error(`Error de red: ${response.status}`); }
//        return response.json();
//    })// Convertir la respuesta a formato JSON
//    .then(data => { secreTex = data[0].toUpperCase(); console.log(secreTex); }) // Manipular los datos obtenidos de la API
//    .catch(error => {
//        secreTex = error = libro[indice];
//       console.error("la secreTex es: ", secreTex);
//    });// Manejar errores de red u otros errores
function init() { console.log(iniTex) }
function intentar() {
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";
    console.log(ROW);
    const BXTEX = leerBXTEX(); //leer la caja de texto
    BXTEX.length != 5 ? alert(maxletras) : compararText(GRID, ROW, BXTEX);
}
function leerBXTEX() {
    return document.getElementById("guess-input").value.toUpperCase();
}
function compararText(GRID, ROW, BXTEX) {
    console.log("1: " + BXTEX);
    for (let i in secreTex) {
        const color = BXTEX[i] === secreTex[i] ? 0 : secreTex.includes(BXTEX[i]) ? 1 : 2;
        pintar(ROW, BXTEX, i, color);
    }
    GRID.appendChild(ROW);
    BXTEX === secreTex ? terminar(0) : intentos == 0 ? terminar(1) : intentos--;
}
function pintar(ROW, BXTEX, i, color) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    console.log(BXTEX[i], texColor[color])
    SPAN.innerHTML = BXTEX[i];
    SPAN.style.backgroundColor = bgColor[texColor[color]];
    console.log(SPAN);
    ROW.appendChild(SPAN);
}
function terminar(mensaje) {
    button.disabled = true;
    const INPUT = document.getElementById("guess-input").disabled = true;
    let contenedor = document.getElementById('guesses').innerHTML = texFinal[mensaje];
}