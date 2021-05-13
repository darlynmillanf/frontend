/*
EJERCICIO 5
Elaborar un programa que lea un número y determine el mayor de los dígistos.
*/

console.log('+-----------------INICIO DEL PROGRAMA----------------+');

let numero; //Variable número
let numMayor = 0; //Variable para el número mayor

console.log('Digite el número: ');

process.stdin.on('data', (almacenador) => {   

    numero = almacenador.toString().trim();

    for(let i=0; i < numero.length; i++){

        if(numMayor < numero[i]){

            numMayor = numero[i];
            
        }

    }
    
    console.log('+----------------------------------------------------+');
    console.log(`El siguiente número se cataloga como el mayor: >>> ${numMayor} <<<`)
    console.log('+-----------------FIN DEL PROGRAMA-------------------+');
    process.exit();
});