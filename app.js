let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemnto(elemnto, texto){
    let ellementoTHML = document.querySelector(elemnto);
    ellementoTHML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeorDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if(numeorDeUsuario === numeroSecreto){
        asignarTextoElemnto('p',`Acertaste el nuemro en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //el usuario fallo
        if(numeorDeUsuario > numeroSecreto){
            asignarTextoElemnto('p','El numero es menor');
        }else{
            asignarTextoElemnto('p','El numero es mayor');
        }
        intentos++; 
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
    return;
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;

    //Lista llena
    if(listaNumerosSorteados.length == numeroMaximo){
        //indicar que termino el juego
        asignarTextoElemnto('p','Se terminaron los numeros');
        //Limpiar la lista
        listaNumerosSorteados = [];
        
    }else{
        // Si el numero generado esta en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            //Volver a generar un numero
            return generarNumeroSecreto();
        }else{
            //Si el numero no esta en la lista
            //Agregarlo a la lista
            listaNumerosSorteados.push(numeroGenerado);
            //Retornar el numero generado
        return numeroGenerado;
        }
    }

    
    
}

function condicionesIniciales(){
    asignarTextoElemnto('h1','Juego del numero secreto');
    asignarTextoElemnto('p',`Indicar un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Reiniciar las condiciones iniciales
    condicionesIniciales();
    //deshabilitar el boton de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
















// desafio1
/*

//1. Crear una función que muestre "¡Hola, mundo!" en la consola

function mensaje(texto){
    console.log(texto);
}
mensaje('¡Hola, mundo!');

//2.Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function mensaje2(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
mensaje2('Cristian');

//3.Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function numeroDoble(numero){
    return numero * 2;
}
console.log(numeroDoble(5));

//4.Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(numero1, numero2, numero3 ){
    let promedio = (numero1 + numero2 + numero3) / 3;
    return promedio;
}

console.log(promedio(5, 10, 15));

//5.Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numeroMayor(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    }else{
        return numero2;
    }
}

console.log(numeroMayor(5, 10));

//6.Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function multiplicar(numero){
    return numero * numero; 
}

console.log(multiplicar(5));

*/


//desafio 2
/*
//1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function imc(altura, peso){
    return peso / (altura * altura);
}

console.log(imc(1.70, 70));

//2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numero){
    let resultado = 1;
    for(let i = numero; i > 0; i--){
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5));

//3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.


function convertirDolar(dolar){
    return dolar * 3900;
}

console.log(convertirDolar(1));

alert(`el cambio dolar a peso es igusl a ${convertirDolar(1)}`)


//4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function areaYperimetro(altura, anchura){
    let area = altura * anchura;
    let perimetro = (altura + anchura) * 2;
    return `el area es ${area} y el perimetro es ${perimetro}`;
}

console.log(areaYperimetro(5, 10));

//5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaYperimetroCirculo(radio){
    let area = Math.PI * (radio * radio);
    let perimetro = 2 * Math.PI * radio;
    return `el area es ${area} y el perimetro es ${perimetro}`;
}

console.log(areaYperimetroCirculo(5));

//6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(numero){
    let resultado = 0;
    for(let i = 1; i <= 10; i++){
        resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

tablaMultiplicar(5);

*/

//desafio 3
/*
//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//2.Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function elemtosDeLista(lista){
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i]);
    }
}

elemtosDeLista(lenguagesDeProgramacion);

//5.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function elemtosDeListaInverso(lista){
    for(let i = lista.length - 1; i >= 0; i--){
        console.log(lista[i]);
    }
}

elemtosDeListaInverso(lenguagesDeProgramacion);

//6.Crea una función que calcule el promedio de los elementos en una lista de números.
function sumarElemetosDeUnalista(lista){
    let resultado = 0;
    for(let i = 0; i < lista.length; i++){
        resultado += lista[i];
    }
    return resultado;
}


function promedioLista(lista) {
    let suma = sumarElemetosDeUnalista(lista);
    let promedio = suma / lista.length;
    return promedio;   
}

console.log(promedioLista([1, 2, 3, 4, 5]));

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function numeroMayorDeLista(lista) {
    let numeroMayor = lista[0];
    for(let i = 1; i < lista.length; i++){
        if(lista[i] > numeroMayor){
            numeroMayor = lista[i];
        }
    }
    return numeroMayor;   
}

function numeroMenorDeLista(lista) {
    let numeromenr = lista[0];
    for(let i = 1; i < lista.length; i++){
        if(lista[i] < numeromenr){
            numeromenr = lista[i];
        }
    }
    return numeromenr;
}


function mayorYmenor(lista){
    let mayor = numeroMayorDeLista(lista);
    let menor = numeroMenorDeLista(lista);
    return `el numero mayor es ${mayor} y el numero menor es ${menor}`;
}

console.log(mayorYmenor([1, 2, 3, 4, 5]));

//8. Crea una función que devuelva la suma de todos los elementos en una lista.

function sumarElemetosDeUnalista(lista){
    let resultado = 0;
    for(let i = 0; i < lista.length; i++){
        resultado += lista[i];
    }
    return resultado;
}

console.log(sumarElemetosDeUnalista([1, 2, 3, 4, 5]));

//9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function posicionDeUnElemento(lista, elemento){
    for(let i = 0; i < lista.length; i++){
        if(lista[i] === elemento){
            return i;
        }
    }
    return -1;
}

console.log(posicionDeUnElemento([1, 2, 3, 4, 5], 3));

//10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarDosLista(lista1, lista2) {
    if(lista1.length == lista2.length){
        let lista3 = [];
        for(let i = 0; i < lista1.length; i++){
            lista3.push(lista1[i] + lista2[i]);
        }
        return lista3;
    }else{
        return alert('error no son iguales');
    }
}

console.log(sumarDosLista([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

//11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número

function cuadradoDeLista(lista){
    let listaCuadrado = [];
    for(let i = 0; i < lista.length; i++){
        listaCuadrado.push((lista[i] * lista[i]));
    }
    return listaCuadrado;
}

console.log(cuadradoDeLista([1,2,3,4,5]));


*/
