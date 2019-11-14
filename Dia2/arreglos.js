var arreglo = [40,100,1,20,10]
//console.log(arreglo.length)
//console.log(arreglo.sort((a,b)=> a - b) )

var letrasArreglo = ['T','E', 'G', 'U']
//console.log(letrasArreglo)
//console.log(letrasArreglo.toString())
//console.log(letrasArreglo.join('*'))
//console.log(letrasArreglo.join(''))
//console.log(letrasArreglo.concat(['S','P','S']))

letrasArreglo.push('C')
letrasArreglo.push('I')
letrasArreglo.push('G')
letrasArreglo.push('A')
letrasArreglo.push('L')
letrasArreglo.push('P')
letrasArreglo.push('A')
//console.log(letrasArreglo)
function myFunction(value, index, arreglo) {
    console.log(value)
}
letrasArreglo.forEach(myFunction)

