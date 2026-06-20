// Se usa cuando tenemos muchos casos posibles (+3)

// Queremos saber a que "generacion" pertenecemos

// let anioNacimiento = 2005


// switch (true) {
//     case anioNacimiento >= 1920 && anioNacimiento <= 1945:
//         console.log("Generacion Silenciosa")
//         break;
//     case anioNacimiento >= 1946 && anioNacimiento <= 1964:
//         console.log("Gen Baby Boomer")
//         break;
//     case anioNacimiento >= 1965 && anioNacimiento <= 1979:
//         console.log("Gen X")
//         break;
//     case anioNacimiento >= 1982 && anioNacimiento <= 2000:
//         console.log("Gen Y")
//         break;
//     case anioNacimiento >= 2001 && anioNacimiento <= 2010:
//         console.log("Gen Z")
//         break;
//     case anioNacimiento >= 2011 && anioNacimiento <= 2020:
//         console.log("Gen A")
//         break;

//     default:
//         console.log("Sos de otra Gen")
//         break;
// }


// // --------------------------------

// let color = "rojo"

// // switch busca que un case sea estrictamente igual a su key

// switch (color) {
//     case "azul":
//         console.log("Es Azul")
//         break;
//     case "rojo":
//         console.log("Es rojo")
//         break;

//     default: 
//     console.log("Color Desconocido")
//         break;
// }

// -----------------------------------

// while -> mientras
// mientras la condicion sea verdadera se ejecuta

//contador

//let contador = 1

//  while (contador <= 5) {
//     console.log (contador)
//     contador++ 
// }


let bomba = 3

// while (bomba > 0) {
//     console.log(bomba)
//     bomba--
// }

// console.log("boom")




// for (let index = 1; index <= 20; index++) {
//     // console.log(7.85*index)

//     console.log(`7.5 x ${index} = ${7.5*index}`)
// }



// for (let index = 0; index <= 100; index += 3) {
//     console.log (index)
// }

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
// 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
// 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
// 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
// 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
// 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
// 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
// 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

// for (let index = 0; index < numeros.length; index++) {
//     if(numeros[index]%4 === 0){
//         console.log(`es par ${numeros[index]}`)
//     }

// }



// const frutas = ["manzana", "pera", "banana", "mango"]

// for(const fruta of frutas)
//     console.log(fruta)


// // suma agregada

// const precios = [5000,10000,60000,35000]
// let total = 0

// for(const precio of precios){
//     total += precio
// }
// console.log("total: ", total)


let nombres = ["ana", "luis", "luz", "juan", "mateo"]

//Toma cada item de un array y es procesado por una funcion
//callback
// nombres.forEach(nombre => console.log(nombre))

// nombres.forEach(nombre => {
//     if(nombre === "ana"){
//         console.log(nombre)
//     }
// })

// una funcion es codigo reutilziable
// considera las funciones como herramientaspara propositos especificos
// function selecionaNombre(nombre, item) {
//     if(nombre === item){
//         console.log(nombre)
//     }
// }

// nombres.forEach(nombre => selecionaNombre("juan", nombre))




let n=[1,2,3]

// let dobles = n.map(n => n *2)

// console.log(dobles)


//lo mismo de arriba pero con forEach
let resultado = []
n.forEach(n => {
    let valor = n *2
//push -> añade un elemento a un array
    resultado.push(valor)
})


// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
// 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
// 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
// 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
// 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
// 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
// 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
// 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

// let m50 = numeros.filter(num => num > 50) //(!== 50)
// console.log(m50)


