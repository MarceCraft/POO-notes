class Carro {
    constructor(velocidad, modelo) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.boll = false;
        this.cd = function() {
            console.log("rabano");
        }

        this.constante = Math.PI;
    }

    set setVelocidad(cambio) {
        this.velocidad = cambio;
    }

    arrancar() {
        if(this.boll){
            console.log(this.velocidad + "run run!"+ this.modelo);
        }
        else {
            console.log("rata");
            this.cd();
        }
    }
}

class Moto extends Carro {
    constructor(velocidad, cambio) {
        super(velocidad);
        this.boll = cambio;
    }
}

const montero = new Carro("sport", "54km/h"), moto = new Moto(undefined, true);
montero.setVelocidad = "90km/h ";
montero.arrancar();

moto.arrancar();
