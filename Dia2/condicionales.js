var hora = 13;
/*
if( hora > 18){
    console.log('Buenas noches');
}else if(hora < 11){
    console.log('Buenos Dias')
}else{
    console.log('Buenas tardes');
}*/

var numero= "15"
/*
if(numero === 15){
    console.log('Son iguales')
}else{
    console.log("No son iguales")
}
*/

var boleano = false;
var nombre = "Pedro"
if (!boleano){
    //console.log("entroo!!");
}
/*
function myFunction(nombre) {
    return nombre == "Pedro"
}

if (!myFunction("Doris")) {
    console.log("Feliz Cumpleaños!!");
}
*/

/* switch */

var pais = 'Canada';
/*
switch (pais){
    case 'El Salvador':
        console.log("Pais es El Salvador");
        break
    case 'Panama':
        console.log("Pais Panama");
        break
    case 'Honduras':
        console.log('Pais es Honduras')
        break
    default:
        console.log('Imprimir algo')
}
*/
switch (pais){
    case 'EEUU':
    case 'Canada':
        console.log('Pais es de norte america');
        break
    case 'Honduras':
    case 'Costa Rica':
        console.log('Pais es de centro america');
        break
    default:
        console.log('No lo sé!!')
}
