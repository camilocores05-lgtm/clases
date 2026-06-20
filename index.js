// estructura de control condicional


let condicion = true
// si se cumple la condicion(si sucede x situacion)
if(condicion){
    // entonces sucede x
    console.log("es verdadero")
}else{   // y si esa condicion no se cumple
    // sucede esto x
    console.log("es falso")
    }

// positivo de else -> fallback, sucede si if falla
// negativo (limitacion)-> toma la alternativa sin importar la condicion
// se usa un solo Else por bloque IF

// not

if(!condicion){
    console.log("es falso")
}
else{
    console.log("es verdadero")
}

// // --------------------------------------------

// debajo de los 10°C grados
// quiero ver en pantalla que si hace menos de 10°C me diga que debo abrigarme

let temperatura = 9
let frio = true
// la temperatura desde la cual considero que hace frio
let umbral = 10
let umbral_min = 10
let umbral_max = 18

if(temperatura <= umbral){
    frio = true
    console.log("me abrigo", frio)
}else{
    frio = false
    console.log("no me abrigo", frio)
}
// no dejar numeros al azar, es mejor hacer una variable y en el if/else tenga una condicion.
// Seria hacer hardcode

// ----------------------------------------

// AND --> &&
// OR -> ||

// else if -->permite añadir otra condicion extra

if(temperatura <= umbral){
    console.log("Me pongo campera de invierno")
} else if(temperatura > umbral_min && temperatura < umbral_max){
    console.log("Me pongo un buzo")
}else{
    console.log("No me abrigo")
}

// if ternario

temperatura <= umbral_min ? console.log("Me abrigo") : console.log("No me abrigo")

temperatura <= umbral_min ? console.log("Me pongo campera de invierno") : (temperatura > umbral_min && temperatura < umbral_max) ? console.log("Me pongo un buzo") : console.log("No me abrigo")

