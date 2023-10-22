/*clase  : es una fabrica de objetos crean objetos
objetos : son los resultados de clase
atributo : caracteristicas que tiene nuestro objeto
metodo : son las cosas que puede hacer nuestro objeto
constructor : construye las propiedades de un objeto
intanciar : cuando se finaliza todo la clase esta instanciada*/ 
class animal {
    //que cosas tiene tu objeto
    constructor(especie, edad , color) {
        //this --> objeto que se creara es decir se selecciona al objeto
        this.esp = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.esp}, tengo ${this.edad}
        años y soy de color ${this.color} `;
    }
    //se puede crear funciones flecha
    verInfo = () => document.write(this.info + "<br>");
}
//wawa va ser igual a un objeto de la clase animal
//new instancia un objeto
const wawa = new animal("wawa", 1, "plomo");
//decir this es como decir wawa
document.write(wawa.esp + "<hr>");

let animales = [["vicuña", 3, "cafe"], ["guanaco", 4, "blanco"], ["alpaca", 5, "negro"], ["oveja", 7, "redonda"]];
let objetos = [];
for( let ani of animales) {
    objetos[ani[0]] = new animal(ani[0], ani[1], ani[2]);
    objetos[ani[0]].verInfo();
}

