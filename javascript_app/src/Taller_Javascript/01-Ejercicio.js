/*
EJERCICIO 1
Elaborar un programa que lea un número y lo imprima en forma inversa.
*/

console.log('+-----------------INICIO DEL PROGRAMA----------------+');

let numero; //variable número

console.log('Digite el número que desea invertir: ');

process.stdin.on('data', (almacenador) => { 

    numero = almacenador.toString().trim();

    let numero_inverso = ''; //variable número inverso

    for(let i=(numero.length-1); i >= 0; i--){   
        numero_inverso += numero[i];         
    }
    console.log('+----------------------------------------------------+');
    console.log(`El número ${numero} en su forma inversa es: ${numero_inverso}`);
    console.log('+----------------------------------------------------+');
    console.log('+-----------------FIN DEL PROGRAMA-------------------+');
    process.exit();

});