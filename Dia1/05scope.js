var nombre = 'Juan Carlos'
console.log(nombre)
// aqui la puedo usar myvariable

function myFuncion1() {
    //aqui puedo usar myvariable
    var nombre = 'Hernandez'
    console.log(nombre)
    console.log(window.nombre)
}

myFuncion1()