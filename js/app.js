/*
Crea una web con bootstrap y js, que contenga un botón comenzar el juego,
 en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
 la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, 
 al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico,
si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */


const numIngresado =  document.querySelector("#numeroIngresado");
const btnComenzar = document.querySelector("#btnComenzar");

function generarNumeroAleatorio(){
    const min = 0;
    const max = 100;
    const numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numAleatorio
}
const numAleatorio = generarNumeroAleatorio()

function comenzarJuego() {
    console.log(`el numero aleatorio creado es: ${numAleatorio}`);
    btnComenzar.innerHTML = 'Listo! Número aleatorio creado!';
    btnComenzar.disabled = true;
}


function enviarNumero(e){
    e.preventDefault() 
    console.log(`el numero ingresado  es: ${numIngresado.value}`);
    console.log(`el numero aleatorio  es: ${numAleatorio}`);

     if (numIngresado.value == numAleatorio){
         alert(`Felicidades! Elegiste el número ${numIngresado.value} y adivinaste!`)
     } else if( numIngresado.value < numAleatorio){
         alert(`Ups! El número que debes adivinar es MAYOR al que elegiste. Vuelve a intentar`)
     } else {
         alert(`Ups! El número que debes adivinar es MENOR al que elegiste. Vuelve a intentar`)
     }
}