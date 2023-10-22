class Molde {
    constructor(ln, ms) {
        this.longitud = ln;
        this.masa = ms;
        this.false = false;
    }

    metodo() {
        if (this.false) {
            document.write("<b>HOLA MUNDO CRUEL</b>");
        }

        else {
            document.write(`Longitud : ${this.longitud}<hr>
                            Masa : ${this.masa}`);
        }
    }

    static mundo() {
        console.log("Hola mundo crue");
    } 
}

/*
const molde = new Molde(17, 50);
molde.metodo();*/

class Here extends Molde {
    constructor(bol, masa) {
        super(masa)
        this.false = bol;
    }
}

const calcMasa = masa => {
    let reser = "";
    for(let i = masa.length - 1; i >= 0; i--) {
        reser += masa[i];
    }
    return reser;
}

const heredar = new Here(true, calcMasa("masa"));

heredar.metodo();
console.dir(heredar);

