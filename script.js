let verde= "#79b851";
let amarillo= "#f3c237"
let gris= "#a4aec4";
let intentos = 6;
let libro = ["CARTA","TORTA","MAPLE","PERLA","PLATO","MULTA","TECLA","TECHO"];
let indice = Math.floor(Math.random()* libro.length);
let palabra = libro[indice];
console.log(palabra);
window.addEventListener('load', init)

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);



function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
} 

function intentar(){
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";
    console.log(ROW);
    const INTENTO = leerIntento();
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