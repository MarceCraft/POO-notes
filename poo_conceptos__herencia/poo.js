/*abstraccion : hacer el objeto lo menos complejo posible osea
resume metodos

modularidad : separar el problema en partes chiquitas

encapsulamiento : hacer que toda la data esten privados osea
que el usuario no pueda acceder tan facil

polimorfismo : es la capacidad que tiene un objeto para compor
tarse distinto por sus propiedades */

class Animal {
    constructor(especie, edad , color) {
        this.esp = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.esp}, tengo ${this.edad}
        años y soy de color ${this.color} `;
    }

    verInfo = () => document.write(this.info + "<br>");
    /*ladrar = () => {
        no se puede usar parametros del constructor solo se
        puede usar el this
        if (this.esp === "perro") {
            document.write("!wau wau <br>");
        }
        else {
            document.write("no puede ladrar ya que es " + this.esp+ "<br>");
        }
    }*/
}

/*herencia : crear una clase que toma todo lo que pueda 
hacer otra clase y sus propiedades pero agregarle cosas
nuevas*/
class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        //hereda atributos del anterior constructor
        super(especie, edad, color);
        this.raza = raza;
        this.info += "y soy de raza " + raza;
    }

    ladrar = function() {
        console.log(`Soy ${this.raza} !wau wau`);
    }
}

const alpaca = new Animal("alpaca", 5, "cafe");
//no se puede tener un objeto con el mismo nombre de la clase
const perroooooo = new Perro("perro", 5, "negro", "doberman");
alpaca.verInfo();
//se puede usar metodos ya que se heredo
perroooooo.verInfo();
perroooooo.ladrar();
