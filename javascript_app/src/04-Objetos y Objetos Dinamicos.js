console.log('+-------------------OBJETOS-------------------+')

const persona = {
    nombres: 'Darlyn Geovanny',
    apellidoPaterno: 'Millan',
    apellidoMaterno: 'Farfan',
    fechaNacimiento: '1994-09-26',
    direccion: {
        viaPrincipal: 'Calle',
        numeroVia: '21',
        placa: '10-47',
        barrio: 'Las Americas',
    },
    contacto: {
        parentesco: 'Mamá',
        nombreContacto: 'Damelis',
        numeroContacto: '+57 320 9912535',
    }
};

console.log(persona);
console.log('');
console.table(persona);

//HERENCIA DE UN OBJETO O CLONADO
let otraPersona01 = {...persona}

otraPersona01.nombres = 'Andres Felipe',
otraPersona01.apellidoPaterno = 'Millan',
otraPersona01.apellidoMaterno = 'Farfan',
otraPersona01.fechaNacimiento = '2002-04-22',

console.log('+------------------OBEJETO PERSONA--------------------+')
console.log(persona);
console.log('+------------------OBEJETO OTRA PERSONA--------------------+')
console.log(otraPersona01);
console.log('');
console.log('+------------------OBEJETO TABLA PERSONA--------------------+')
console.table(persona);
console.log('+------------------OBEJETO TABLA OTRA PERSONA--------------------+')
console.table(otraPersona01);

console.log('');
console.log('+-------------------OBJETOS DINAMICOS-------------------+')

const personaDinamica = {
    nombres: 'Darlyn Geovanny',
    apellidoPaterno: 'Millan',
    apellidoMaterno: 'Farfan',
    fechaNacimiento: '1994-09-26',
    direccion: {
        viaPrincipal: 'Calle',
        numeroVia: '21',
        placa: '10-47',
        barrio: 'Las Americas',
    },
    contacto: {
        parentesco: 'Mamá',
        nombreContacto: 'Damelis',
        numeroContacto: '+57 320 9912535',
    },
    fxNombreCompleto(){
        console.log(`Mi nombre completo es ${this.nombres} ${this.apellidoPaterno} ${this.apellidoMaterno}`);
    },
    fxTabularAtributos(){
        console.table(this);
    }
};
//POR CREACION DE NUEVO OBJETO
//let obj = Object.create(personaDinamica)

//POR CLONACION
let obj = {...personaDinamica};

obj.nombres = 'Master'
obj.apellidoPaterno = 'DM'
obj.fxNombreCompleto();
obj.fxTabularAtributos();

console.log('+-------------------FIN PROGRAMA-------------------+')