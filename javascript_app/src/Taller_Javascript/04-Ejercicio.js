/*
EJERCICIO 4
Elaborar un programa que lea un número, y un dígito y determine si el dígito esta dentro del número.
*/

console.log('+-----------------INICIO DEL PROGRAMA----------------+');

let preguntas = ['Digite un número: ', '¿Cual dígito desea encontrar?: '];
let numero = []; //Variable número y arreglo
let solucion; //Variable para almacenar la solución

const Preguntas = (i)  => {
    console.log(preguntas[i]);
}

process.stdin.on('data', (almacenador) => {   

    numero.push(almacenador.toString().trim())

    if(numero.length < preguntas.length){

        Preguntas(numero.length)

    }else{

        buscarDigito(numero[0], numero[1]);

        process.exit();

    }
});

    
const buscarDigito = (digito, buscador) => {

    resultado = digito.indexOf(buscador)      

    if(resultado != -1){
        console.log('+----------------------------------------------------+');
        console.log(`El dígito ${numero[1]} se encontró dentro del número ${numero[0]}`);
        console.log('+-----------------FIN DEL PROGRAMA-------------------+');
    }else{
        console.log('+----------------------------------------------------+');
        console.log(`El dígito ${numero[1]} no aparecese dentro del número ${numero[0]}`);
        console.log('+-----------------FIN DEL PROGRAMA-------------------+');
    }
}

Preguntas(0);
