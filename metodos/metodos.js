class Animal {
    constructor(especie, edad , color) {
        this.esp = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.esp}, tengo ${this.edad}
        años y soy de color ${this.color} `;
    }

    verInfo = () => document.write(this.info + "<br>");
}

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        //ya que se modificara con el tiempo
        this.raza = null;
        this.info += "y soy de raza " + raza;
    }

    ladrar = function() {
        console.log(`!wau wau`);
    }

    //es usada para ser invocado por el mismo objeto no necesita
    /*que declare un objeto ademas no puede ser usado por objetos
    declarados*/
    static aullar = () => console.log("aaaauuuuuuuuu");
    /* forma incorrecta
    modificarRaza = () => this.raza = "pedro";*/
    //setter : modifica un valor de una propiedadk
    //espera recibir un parametro
    set setRaza(newName) {
        this.raza = newName;
        console.log("raza modificada---> " + this.raza);
    }

    //getters : obtiene osea retorna un valor de un atributo de nuestra clase
    get getRaza(){
        return this.raza;
    }
    sumar(x, c) {
        return x + c;
    }

    //los getters y setters se usan para acceder a datos encapsulados
}

const alpaca = new Animal("alpaca", 5, "cafe");
//no se puede tener un objeto con el mismo nombre de la clase
const perroooooo = new Perro("perro", 5, "negro", "doberman");
alpaca.verInfo();
//se puede usar metodos ya que se heredo
perroooooo.verInfo();
perroooooo.ladrar();
//invocacion de metodos estaticos
//ojo colocar el nombre de la clase
Perro.aullar();

const guanaco = new Perro("guanaco", 4, "marron", "criollo");
//el valor que escribi esta modificando la propiedad
guanaco.setRaza = "GUANACOO!";
guanaco.verInfo();
console.log(guanaco.getRaza);
document.write(`<b>Suma : ${guanaco.sumar(70, 10)} </b>`);