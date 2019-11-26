
class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    presentarse1(fn){
        var {nombre, apellido, edad} = this
        console.log(`Hola soy: ${nombre} ${apellido} y tengo ${edad} años! `)
        if(fn){
            responder(nombre, apellido)
        }
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, edad, lenguajeFav){
        super(nombre, apellido, edad)
        this.lenguajeFav = lenguajeFav
    }
    presentarse(fn) {
        var {
            nombre,
            apellido,
            edad,
            lenguajeFav
        } = this
        console.log(`Hola soy: ${nombre} ${apellido} y tengo ${edad} años! y mi lenguaje favorito es: ${lenguajeFav} `)
        if (fn) {
            responder(nombre, apellido, lenguajeFav)
        }
        //return ` ${this.presentarse1()} y mi lenguaje favorito es: ${this.lenguajeFav} `
    }
}

function responder(nombre, apellido, lenguaje){
    console.log(`Que ondas ${nombre} ${apellido}` );
    if (lenguaje) {
        console.log('Ah pucha no sabías que eras desarrollador')
    }
}
//reponder('Juan Carlos', 'Reyes', 'Python')
//console.log('***********************')
//reponder('Arisai', 'Aguilar')




var maria = new Persona('Maria', 'Hernandez', 16)
var luis = new Persona('Luis', 'Garcia', 26)
var juan = new Desarrollador('Juan Carlos', 'Hernandez', 25, 'Python')

maria.presentarse1()
luis.presentarse1(responder)
juan.presentarse(responder)