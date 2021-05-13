/*
EJERCICIO 3
Elaborar un programa que lea un número y determine si es capicúa.
*/

console.log('+-----------------INICIO DEL PROGRAMA----------------+');

let numero; //Variable número
let numInicial = 0; //Variable del primer número inicializada en 0
let numFinal; //Variable del número final
let numCentro; //Variable del número central

console.log('Digite el número: ');

process.stdin.on('data', (almacenador) => {   

    numero = almacenador.toString().trim();        
    numFinal = numero.length - 1;           
    numCentro = parseInt(numFinal / 2);  

    while(numero[numInicial] == numero[numFinal]){
           
        if(numCentro == numInicial)
        {
            console.log('+----------------------------------------------------+');
            console.log("El número registrado es capicúa.")
            console.log('+----------------------------------------------------+');
            
            break;

        }

        numFinal--;
        numInicial++;
    }
    
    console.log('+----------------------------------------------------+');
    if(numCentro != numInicial){ //CONDICIONAL "SI EL NÚMERO DEL CENTRO ES DIFERENTE DEL INICIAL"
        console.log("El número registrado no es capicúa.")
        console.log('+----------------------------------------------------+');
    }
    console.log('+-----------------FIN DEL PROGRAMA-------------------+');
    process.exit();
});