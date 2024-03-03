let verde= "#79b851";
let amarillo= "#f3c237"
let gris= "#a4aec4";
let intentos = 6;
let libro = ["CARTA","TORTA","MAPLE","PERLA","PLATO","MULTA","TECLA","TECHO"];
let indice = Math.floor(Math.random()* libro.length);
let palabra;
window.addEventListener('load', init)

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

// URL de la API de palabras aleatorias en español con longitud 5
const apiUrl = 'https://random-word-api.herokuapp.com/word?lang=es&length=5';

// Hacer una solicitud usando el método fetch.  
fetch(apiUrl)
.then(response => {// Verificar si la solicitud fue exitosa (código de estado 200-299)
    if (!response.ok) {throw new Error(`Error de red: ${response.status}`);}
     return response.json();})// Convertir la respuesta a formato JSON
     .then(data => { palabra=data[0].toUpperCase(); console.log(palabra);}) // Manipular los datos obtenidos de la API
     .catch(error => {palabra = error = libro[indice];
        console.error("la palabra es: ",palabra); });// Manejar errores de red u otros errores
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
function intentar(){
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";
    console.log(ROW);
    const INTENTO = leerIntento();
    if(INTENTO.length !=5){alert("Introducir que contenga 5 caracter!!")}else{
    console.log("1: " + INTENTO);
    for (let i in palabra){
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = verde;
            console.log(SPAN);
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor =amarillo;
            console.log(SPAN);
        } else {
            console.log(INTENTO[i], "GRIS")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = gris;
            console.log(SPAN);
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
        intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")
    }
}
}
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}