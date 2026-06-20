// verificar si un carrito de compras está vacio

// Condcion longiutd 0 - > carrito vacio sino imprime cantidad de elemntos, array carrito
// ----------------------------------
// let carrito = []
// if(carrito.length === 0){
//     console.log("Carrito Vacio")
// } else {
//     console.log(carrito.lenght)
//     console.log(`El carrito tiene ${carrito.length} elemnto/s`)
// }
// ------------------------------------------
// function largoCarrito(productos) {
//     if(productos.length === 0){
//         // console.log("carrito vacio")
//     return {
//         mensaje :"Carrito vacio",
//         largo: productos.length
//     }
//     } else {
//     // console.log(carrito.length)
//     // console.log(`El carrito tiene ${productos.length} elemento/s`)
//         return {
//         mensaje :`El carrito tiene ${productos.length} elemento/s`,
//         largo: productos.length
//     }
//     }
// }

// console.log(largoCarrito(carrito).mensaje)

// ----------------------------------------


// EJ2 Saber el ultimo elemento de una fila

    // let fila = ["juan", "mateo", "gonzalo", "ana", "cian"]
    // console.log(fila[fila.length-1])
// es un numero "fila.length" es el largo y -1 accede al ultimo

// EJ 5: asientos de cine con asientos vendidos
    // let asientosVendidos =["A10", "A11", "A12"]
    // console.log("asientos vendidos: ", asientosVendidos.length)

// EJ 4 Calcular el promedio. dado un array de notas con valores nnumericos, suma sus tres primeros valores y divide el length por el array

    const notas =[7,9,8]
    // let promedio = (notas[0] + notas[1] + notas[2]) / notas.length

//ahora con forEach

// let suma = 0

// notas.forEach (nota => {
//     suma += nota
// })
// console.log(suma)
// var promedio = suma / notas.length
// console.log(promedio)

