var nombre = 'Jose'
//console.log(nombre)

function myfunction1 (){
    //debugger
    //var nombre = "Carlos"
    console.log(nombre)
    console.log(window.nombre)
}
//myfunction1()
//console.log(nombre)

function imprimirNumeros(){
    //var i;
    for(let i = 0; i<10; i++){
        
        setTimeout(function(){
            console.log(i);
        },100)
    }
}

imprimirNumeros()

