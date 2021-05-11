//Variables y Constantes 
console.log('+-----------------------------------+');
console.log('Alcance de Variables');

console.log('+-----------------------------------+');
var variableGlobal = 'Variable de Alcance Global';
const varConstante = 'Constante Durante Ejecución';
let varLetLocal = 'ABC';
let varLetNumero = 1112;

console.log('Variable Global 1. '+variableGlobal);
console.log('Constante = '+varConstante);

{
    variableGlobal = 'otro Valor';
    console.log('Variable Global 2. '+variableGlobal);
    let varLetLocal = 'XYZ';
    console.log('letLocal: '+varLetLocal);
}
console.log('letLocal: '+varLetLocal);

//ESTRUCTURA DE CONTROL IF
console.log('+----------------EVALUACION-------------------+');
let evaluacionIf = true;

if (evaluacionIf) {
    console.log('Adentro del if');
    let letNumeroY = 11;
    let letNumeroX = 76;

    console.log('Operación * = '+(letNumeroX * letNumeroY));
}else{
    console.log('Estamos en el else del if');
}

//ESTRUCTURA DE CONTROL SWITCH KEY
console.log('+----------------SELECTOR-------------------+');
let letKey = 2;

switch (letKey) {
    case 1:
            console.log('Caso para 1');
        break;

    case 2:
            console.log('Caso para 2');
        break;

        case 3:
            console.log('Caso para 3');
        break;

    default:
        console.log('Valor no determinado en el selector');
        break;
}
