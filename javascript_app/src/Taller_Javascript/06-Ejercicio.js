/*
EJERCICIO 6
Elaborar un programa que lea un número y determine si es primo.
*/

console.log('+-----------------INICIO DEL PROGRAMA----------------+');

let numero; //Variable número
let numPrimo; //Variable para almacenar número primo

console.log('Digite el número: ');

process.stdin.on('data', (almacenador) => {   

    numero = almacenador.toString().trim();
    let acumulador = 0;

    for(let i = 1; i <= parseInt(numero); i++){

        if(parseInt(numero) % i == 0){
            acumulador++;
        } 
        if(acumulador==2){
            numPrimo = (`El número >>> ${numero} <<< es primo.`);
        }
        else{
            numPrimo = (`El número >>> ${numero} <<< no es primo.`);
        }
    }
    console.log('+----------------------------------------------------+');
    console.log(numPrimo);
    console.log('+-----------------FIN DEL PROGRAMA-------------------+');
    process.exit();
});