console.log('+-------------------TALLER VEHICULO-------------------+')

const vehiculo = {
    tamañoTanque: 200,         //Tamaño del tanque
    kilometroxLitro: 2,        //Kilometros por litros
    radioNeumaticos: 20,       //Radio de los neumaticos 
    colorVehiculo: 'Negro',    //Color del vehiculo
    cantidadCombustible: 60,   //Cantidad de combustible en el tanque
    recorridoxNeumatico: 0,    //Recorrido del vehiculo por el radio de los neumaticos
    aceleracion: 0,            //Aceleración del vehiculo
    distanciaRecorrida: 0,     //Distancia recorrida del vehiculo
    estatusMotor: false,       //¿Vehiculo encendido o apagado?

    llenarTanqueCombustible(){
        let combustible = Math.random() * 100;

        if (combustible <= (this.tamañoTanque - this.cantidadCombustible)) {
            this.cantidadCombustible += combustible;

            console.log(`El nivel de combustibles es de ${this.cantidadCombustible} litros.`);

        }else{
            console.log('La capacidad del tanque esta al maximo.');
        }
    },
    encender(){
        if (!this.estatusMotor) {
            if (this.cantidadCombustible >= 2) {  //Cantidad minima de combustible = 2 litros.
                this.estatusMotor = false;

                console.log('Vehiculo encendido.');

                this.acelerar();
                
            }else{
                console.log('El vehiculo esta apagado.');
            }
            
        }
    },
    apagar(){
        if (this.estatusMotor) {
            this.estatusMotor = false;
            console.log('Vehiculo apagado.');
        }else{
            console.log('El vehiculo esta encendido..');
        }
    },
    acelerar(){
        if (this.cantidadCombustible > 0) {
            this.aceleracion = Math.random() * 100;

            console.log(`La aceleración del vehiculo es de ${this.aceleracion} kilometros/s.`);

            this.distanciaRecorrida += this.aceleracion;

            console.log(`La distancia recorrida por el vehiculo es de ${this.distanciaRecorrida} kilometros/s.`);

            let combustibleConsumido = this.aceleracion * this.kilometroxLitro;

            this.cantidadCombustible -= combustibleConsumido;

            console.log(`El vehiculo a consumido ${combustibleConsumido} litros.`);
            console.log(`El nivel de combustible del tanque es de ${this.cantidadCombustible} litros.`);
        }else{
            this.apagar();
            console.log('Cantidad de combustible BAJO.');
        }

    },
    calcularRecorridoNeumaticos(){
        const PI = 3.14;
        this.recorridoxNeumatico = (this.radioNeumaticos * 2 * PI);

        console.log(`Distancia recorrida por un giro del neumatico: ${(this.recorridoxNeumatico / 100).toFixed(3)}`);
    },

};

console.log('+-------------------ESTADISTICAS------------------------------+')
console.log('+-------------------DATOS VEHICULO----------------------------+')
console.table(vehiculo);
console.log('+-------------------RECORRIDO DEL NEUMATICO-------------------+')
vehiculo.calcularRecorridoNeumaticos();
console.log('');
console.log('+-------------------ESTATUS DEL COMBUSTIBLE-------------------+')
vehiculo.llenarTanqueCombustible();
console.log('');
console.log('+-------------------ENCENDER VEHICULO-------------------------+')
vehiculo.encender();
console.log('');
console.log('+-------------------APAGAR VEHICULO---------------------------+')
vehiculo.apagar();
console.log('');
console.log('+-------------------ACELERAR VEHICULO-------------------------+')
vehiculo.acelerar();