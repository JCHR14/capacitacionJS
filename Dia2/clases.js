
/* 
class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    presentarse(){
        return `Hola soy: ${this.nombre} ${this.apellido} y tengo ${this.edad} años! `
    }
    mayorEdad(){
        return this.edad > 17
    }
}
*/

//var maria = new Persona('Maria', 'Hernandez', 16)
//var luis = new Persona('Luis', 'Garcia', 26)

class Auto{
    constructor(marca, modelo, precio, anio){
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.anio = anio
    }
    informacionAuto(){
        return `Marca: ${this.marca} Modelo: ${this.modelo}`
    }
    depresiacionAuto(valorDepreciado){
        let valorActual = this.precio - valorDepreciado
        return `${this.informacionAuto()} y su valor de mercado es de: ${valorActual}`
    }
}

