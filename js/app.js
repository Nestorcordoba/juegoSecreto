

let numeroSecreto = retornarNumeroSecreto();


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('ingresoValor').value);
    console.log(numeroUsuario);
    console.log(typeof(numeroUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario === numeroSecreto);
    return;
}

function seleccionadorDeElementos(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function retornarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

seleccionadorDeElementos('h1',"Juego del numero secreto");
seleccionadorDeElementos('p',"Coloca un numero del 1 al 10");



/* Selecciona todos los elementos <p>
let parrafos = document.querySelectorAll('p');

// Itera sobre cada párrafo y asigna un texto diferente
parrafos.forEach((parrafo, index) => {
    parrafo.innerHTML = `Este es el párrafo número ${index + 1}`;
    console.log(parrafo.innerHTML);
});
*/



