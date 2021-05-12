console.log('+-------------------STRING TEMPLATE-------------------+')

const apellido = 'Millan';
let nombre = 'Darlyn Geovanny';

let varNumero = 11;

console.log('+ Señor ' +apellido+' su multiplicación es: ' +(varNumero * 7));

//Aplicación del string template
console.log('');
let stringTemplate = `+ STRING TEMPLATE: 
Señor  ${apellido} su multiplicación es: ${varNumero * 7}`;
console.log(stringTemplate);

console.log('');
console.log('+--------------------------------------+')
console.log(`Llamada a una función desde String Template ==>> ${fx_randomico('XYZ')}`);

function fx_randomico(parmString){
    return `con número randomico ==>> ${Math.random() * 100} y parametro ==>> ${parmString}`;
}