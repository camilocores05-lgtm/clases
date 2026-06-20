// shift elimina el primer elemento y muestra a quien sacaste

// EJ1 hacer 1 fila de banco y que llame al primero y lo saque

// let filaBanco =["ana", "luis", "pedro"]
// console.log(filaBanco.shift());
// console.log(filaBanco)

// metodo unshift agrega uno o mas elementos al inicio del array

// let feed = ["deportes", "clima"]
// feed.unshift("ultimo momento")

// console.log(feed);


// splice cambia el contenido de un array eliminando eklemtnos existenes y agregando nuevos elementos

// elminar, reemplazar o insertar elementos en cualquier posicion del array original

// let dias = ["lunes", "martes", "feriado", "jueves"]
// console.log(dias)
// dias.splice(2, 1, "miercoles")
// console.log(dias);

// -------------------

// let nombres = ["a", "b","c","d"]
// console.log(nombres.splice(2,1))
// console.log(nombres);


//--------------------

// SLICE devuelve una copia del array original y el original no se modifica

// top 3 ganadores extraer los 3 primeros

// let competidores = ["ana", "juan", "maria", "mario", "juanca"]
// const top3 = competidores.slice(0, 3)
// console.log(top3)


// ---------------------------

//indexof 
// buscar el auto en el estacionamiento ford chevy honda busca la posicion del chevy

let estacionamiento = ["Ford", "Chevy", "Honda"]
// let indice = estacionamiento.indexOf("Chevy")
// console.log(estacionamiento[indice] = "ferrari");
// console.log(estacionamiento)

// LastIndexOf lo mismo que indexof pero empieza desde atras
// Si no encuentra el valor retorna -1, cuidado que es truthy
let indiceLast = estacionamiento.lastIndexOf("mandarina")
console.log(indiceLast)


//concat() combina dos o mas arrays creando uno nuevo
// no modifica los originales

// let claseA = ["Ana"]
// let claseB = ["Luis"]
// console.log(claseA, claseB);
// let claseCompleta = claseA.concat(claseB)
// console.log(claseCompleta)


// let claseA = ["Ana", "Hugo"]
// let claseB = ["Luis", "Juan"]
// let claseCompleta = claseA.concat(claseB)
// let claseCompletaB = [claseA0].concat(claseB[1])
// console.log(claseCompleta);
// console.log(claseCompletaB);


// join
// crea una URL con segmento home perfil 123 unilos usando /

let segmentos = ["home", "perfil", "123"]
console.log(segmentos.join("/"));
