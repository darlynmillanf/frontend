/*
EJERCICIO 2
Elaborar un programa que lea un número y determine la suma de sus dígitos.
*/

console.log('+-----------------INICIO DEL PROGRAMA----------------+');

let numero; //Variable número
let suma = 0; //Variable suma inicializada en 0

console.log('+-----SE SUMARA CADA DIGITO DEL NUMERO INGRESADO-----+');
console.log('Digite el número: ');

process.stdin.on('data', (almacenador) => {        
    numero = almacenador.toString().trim();        

    for(let i=0; i < numero.length; i++){

        suma = suma + parseInt(numero[i], 20);
    }

    console.log('+----------------------------------------------------+');
    console.log(`Su solución a la suma es: ${suma}`);
    console.log('+----------------------------------------------------+');
    console.log('+-----------------FIN DEL PROGRAMA-------------------+');
    process.exit();
});