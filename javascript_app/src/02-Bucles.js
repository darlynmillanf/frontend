console.log('+----------------BUCLES-------------------+')
//ESTRUCTURA DE CONTROL DOWHILE

let limiteBucle = 10;
let contador = 0;

console.log('+ Bucle: Do While');
console.log('+-----------------------------------+')

do {
    contador ++;
    console.log('Contador: '+contador);
} while (contador < limiteBucle);

/*
ESTRUCTURA DE CONTROL WHILE
RETOS:
1. Implementar un contador
2. Sumar los numeros randomicos en un acumulador
*/

let letCondicion = true;
let letAcumulador = 0;
let letCiclos = 0;

console.log('+-----------------------------------+')
console.log('+ Bucle: While');
console.log('+-----------------------------------+')

while (letCondicion) {
    let letRandom = Math.random() * 10;

    console.log('Ciclo '+letCiclos+' del número Randomico: '+letRandom);
    letCiclos ++;

    if (letRandom > 7) {
        letCondicion = false;
        console.log('');
        console.log('Salida del bucle: '+letCondicion);
    }

    letAcumulador = letRandom + letAcumulador;
}
console.log('');
console.log('TOTAL NUMERO DE CICLOS: ' +letCiclos);
console.log('TOTAL SUMA ACUMULADA: ' +letAcumulador);


//ESTRUCTURA DE CONTROL FOR
console.log('');
console.log('+-----------------------------------+')
console.log('+ Bucle: FOR');
console.log('+-----------------------------------+')

let limiteFor = 20;

console.log('Limite: ' +limiteFor);

for (let index = 0; index < limiteFor; index++) {
    let randomFor = Number.parseInt((Math.random() * 10),10);
    console.log('');
    console.log('Indice For: ' +index + ' y Random = ' +randomFor);
    
}

console.log('');
console.log('+-----------------------------------+')
console.log('+ Bucle: FOR (EJERCICIO INDIVIDUAL)');
console.log('+-----------------------------------+')

let limNumeroFor = 6;
let letAcumulado = 0;

console.log('Limite: ' + limNumeroFor);

for (let index = 0; index < limNumeroFor; index++) {

    let randomFor = Number.parseInt((Math.random() * 10),10);
    console.log('');
    console.log('Indice For: ' +index + ' y Random = ' +randomFor);
    letAcumulado = randomFor + letAcumulado;
}
console.log('');
console.log('Suma de numeros random: ' +letAcumulado);
/*
//ESTRUCTURA DE CONTROL FOREACH
array.forEach(element => {
    
});
//ESTRUCTURA DE CONTROL FOR IN
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
//ESTRUCTURA DE CONTROL FOR OF
for (const iterator of object) {
    
}
//ESTRUCTURA DE CONTROL TRY CASH
try {
    
} catch (error) {
    
} finally {

}
*/