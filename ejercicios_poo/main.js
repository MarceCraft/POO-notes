class Celular {
    constructor(nombre, color, peso, resolu_panta, camara, ram) {
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.resolu_panta = resolu_panta;
        this.camara = camara;
        this.ram = ram;
        this.imagen = celulares[nombre];
        this.funcionar = null;
    }

    get caracteristicas() {
        let data = `<img src ="${this.imagen}" width = "200px" height="200px"><br>
        nombre : ${this.nombre}<br>
        color : ${this.color}<br>
        peso : ${this.peso}<br>
        resolucion pantalla : ${this.resolu_panta}<br>
        camara : ${this.camara}<br>
        ram : ${this.ram}<br>`;
        return data;
    }

    set setFuncionar(funcionar) {
        if (funcionar == true) {
            console.log("prendiendo");
            this.funcionar = funcionar;
        }

        else {
            console.log("apagando");
            this.funcionar = funcionar;
        }
    }

    get getFuncionar() {
        if (this.funcionar == true) {
            return console.log("PRENDIDO");
        }

        else {
            return console.log("APAGADO");
        }
    }

    set setReiniciar(reiniciar) {
        if (reiniciar == true) {
            console.log("apagando");
            console.log("APAGADO");
            console.log("prendiendo");
            console.log("PRENDIDO");
        }
    }

    grabar() {
        console.log("grabando....");
    }

    foto() {
        console.log("foto tomada");
    }

}

class gamaAlta extends Celular {
    constructor(nombre, color, peso, resolu_panta, camara, ram, camara_extra)  {
        super(nombre, color, peso, resolu_panta, camara, ram);
        this.camara_extra = camara_extra;
    }

    get verInfoAltaGama() {
        return this.caracteristicas + "camara extra de " + this.camara_extra + "<hr>"; 
    }

    grabar = () => {
        let camara = parseInt(prompt("usar camara 1 o 2 : "));
        if (camara == 2) {
            console.log("grabando en camara lenta");
        }
        else {
            console.log("grabando normal");
        }
    }

    get getFuncionar() {
        if (this.funcionar == true) {
            console.log("reconocimiento facial :")
            return console.log("PRENDIDO");
        }

        else {
            return console.log("APAGADO");
        }
    }
}

const celulares = [];
celulares["poco_x3"] = "x3.jpeg";
celulares["poco_f3"] = "f3.jpg";
celulares["redmi_note_10_pro"] = "note10pro.jpg";
celulares["s22"] = "s22.jpg";
celulares["mi"] = "mi11.jpg";

const pocox3 = new Celular("poco_x3", "azul", "183kg", "1880px", "32mpx", "6gb");
const pocof3 = new Celular("poco_f3", "blanco", "170kg", "2500px", "64mpx", "8gb");
const redmi10 = new Celular("redmi_note_10_pro", "negro", "180kg", "2400px", "108mpx", "10gb");
document.write(pocox3.caracteristicas);
document.write(pocof3.caracteristicas);
document.write(redmi10.caracteristicas);

pocox3.setFuncionar = false;
pocox3.getFuncionar;

pocof3.setFuncionar = true;
pocof3.getFuncionar;

redmi10.grabar();
redmi10.foto();

const s22 = new gamaAlta("s22", "green", "163kg", "1880px", "150mpx", "14gb","4k");
const mi11 = new gamaAlta("mi", "red", "173kg", "1880px", "108mpx", "14gb", "full hd");
s22.setFuncionar = true;
s22.getFuncionar;

document.write(mi11.verInfoAltaGama);
document.write(s22.verInfoAltaGama);

class App {
    constructor(cantDes, punt, peso) {
        this.descar = cantDes;
        this.punt = punt;
        this.sw = true;
        do {
            this.peso = peso;
            if (this.sw == false) {
                this.peso = parseInt(prompt("vuelva a colocar peso :"));
            }
            this.sw = false;
        }while(this.peso <= 0)

        this.info = `las descargas son ${this.descar}\n 
        la puntuacion es ${this.punt} estrellas y\n 
        el peso es de ${this.peso}mb`;
    }

    get mostrar() {
        console.log(this.info);
    }

    funcionar = () => {
        let funcion = parseInt(prompt("Digite 1 si desea instalar\n2 si desea desinstalar, \n3 si desea abrir y \n4 si desea cerrar"));
        while (funcion < 1 || funcion > 4) {
            funcion = parseInt(prompt("Vuelva a digitar 1 si desea instalar\n2 si desea desinstalar, \n3 si desea abrir y \n4 si desea cerrar"));
        }
        switch (funcion) {
            case 1:
                console.log("Instalado");
                break;
            case 2:
                console.log("Desinstalado");
                break;
            case 3:
                console.log("Abierto");
                break;
            case 4:
                console.log("Cerrado");
                break;
        }
    }
}

const app1 = new App(100000, 5, 570);
app1.mostrar;
const app2 = new App(1000.000, 4, 785);
app2.mostrar;