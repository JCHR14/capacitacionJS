class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    presentarse(){
        return `Hola soy: ${this.nombre} ${this.apellido} y tengo ${this.edad} años! `
    }
}





var maria = new Persona('Maria', 'Hernandez', 20)
var luis = new Persona('Luis', 'Garcia', 26)