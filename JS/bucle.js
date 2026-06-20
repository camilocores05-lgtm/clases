// bucle for
// inicializacion; condicion de corte; Actualizacion
// index++ -> index +1

let numeros = [11, 15, 17, 20, 60, 150, 200, 54654]

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    const indice = index;
    console.log({ element: element, indice: indice })

}

// A partir de un listado de alumnos
//Mostraremos cuales estan aprobados

let alumnos = [{ nombre: "Ana", nota: 8 },
    { nombre: "Carlos", nota: 3 },
    { nombre: "Beth", nota: 7 },
    { nombre: "David", nota: 6 },
]

for (let index = 0; index < alumnos.length; index++) {
    //se almacena el objeto del alumno en una variable
    //para que sea mas facil de leer y utilizar
    let alumnoActual = alumnos[index]

    if(alumnoActual.nota >= 6) {
        console.log(alumnoActual.nombre + " Aprobó ")
    } else {
        console.log(alumnoActual.nombre + " Desaprobó ")
    }
}
