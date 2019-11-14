function imprimirTexto({nombre, apellido}) {
    //console.log(nombre, apellido)
    //console.log( p.nombre, p.apellido, p.edad )
    //console.log(texto)
    //console.log('Son las: ' + hora)
}

//imprimirTexto(persona)
var saludo = function saludar(){
    return persona = {
        nombre: 'Juan Carlos',
        apellido: 'Hernandez',
        edad: 25
    }
}
//console.log(saludo)
var persona = {
    nombre: 'Juan Carlos',
    apellido: 'Hernandez Reyes',
    edad: 25,
    fullName: function(){
        return this.nombre +  ' ' + this.apellido
        //`${this.nombre} ${this.apellido} `
    }
}
//console.log(persona)

function imprimirDatos(){
    var clase = 'Programacion'
    var alumnos = 25
    console.log(clase, alumnos)

}
imprimirDatos()

var datos = (apellido) => 'Juan Carlos ' + apellido



function informacion (){
    // Codigo
    setTimeout(()=>{
        console.log('Algo!!!')
    }, 5000)
    //flecha = ()=> 'Alguna informacion'
    //console.log(flecha())
}
informacion()