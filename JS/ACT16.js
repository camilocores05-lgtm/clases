"¡Colega, necesitamos tu ayuda urgente! El servidor principal sufrió un pico de tensión y la base de datos de Alumnos quedó corrupta. Solo logramos rescatar un pequeño fragmento de los datos en memoria (el array que verás abajo). Sin este sistema, no podemos procesar las notas de los finales que cierran mañana. Los pasillos están llenos de alumnos preocupados y el Rector está exigiendo resultados. Tu misión es reconstruir la lógica del sistema para devolverle la operación a la facultad."

const estudiantes = [
    { legajo: 101, nombre: "Ana", notas: [8, 9, 10], estado: "Activo" },
    { legajo: 102, nombre: "Luis", notas: [4, 5, 4], estado: "Activo" },
    { legajo: 103, nombre: "Marta", notas: [10, 10, 9], estado: "Activo" },
    { legajo: 104, nombre: "Juan", notas: [2, 3, 5], estado: "Activo" },
    { legajo: 105, nombre: "Sofía", notas: [7, 8, 6], estado: "Activo" },
    { legajo: 106, nombre: "Carlos", notas: [5, 6, 7], estado: "Activo" },
    { legajo: 107, nombre: "Valentina", notas: [9, 9, 8], estado: "Activo" },
    { legajo: 108, nombre: "Diego", notas: [3, 4, 2], estado: "Activo" },
    { legajo: 109, nombre: "Lucía", notas: [10, 8, 10], estado: "Activo" },
    { legajo: 110, nombre: "Federico", notas: [6, 10, 6], estado: "Activo" }
];

function calcularPromedio(notas) {
    let suma = 0

    for (const nota of notas) {
        suma += nota
    }
    return suma / notas.length
}
console.log(calcularPromedio(estudiantes[3].notas))

//Consigna: Crea una función matricularAlumno que reciba como parámetros: legajo, nombre, y un array de notas. Debe crear un objeto con esa información (el estado por defecto debe ser "Activo") y agregarlo al array principal estudiantes.

function martricularAlumno(legajo, nombre, notas) {
    const nuevoAlumno = {
        legajo: legajo,
        nombre: nombre,
        notas: notas,
        estado: "activo",
    }
    estudiantes.push(nuevoAlumno)
    console.log(`Alumno ${nombre} matriculado con exito`);
    console.log(estudiantes)

}
martricularAlumno(105, "camilo", [8, 6, 7])

//Consigna: Crea una función buscarPorLegajo que reciba un número de legajo. Debe buscar en el array y retornar el objeto del alumno correspondiente. Si no lo encuentra, debe retornar el mensaje "Alumno no encontrado". Pista: El método find es tu mejor amigo aquí.

function buscarPorLegajo(legajoBuscado) {
    const alumnoEncontrado = estudiantes.find(estudiante => estudiante.legajo === legajoBuscado)

    if (alumnoEncontrado) {
        alumnoEncontrado
    } else {
        return "Alumno no encontrado"
    }

}

console.log(buscarPorLegajo(106, estudiantes));


//Consigna: Crea una función darDeBaja que reciba un legajo. Debe buscar a ese alumno y cambiar el valor de su propiedad estado a "Inactivo".

function darDeBaja(legajo, estudiantes) {
    const estudiante = buscarPorLegajo(legajo)
    if (estudiante)
        if (estudiante.estado === "Activo") {
            alumno.estado = "Inactivo"

            console.log(`El alumno ${estudiante.nombre} fué dado de baja`)
        } else {
            return "El estudiante ya se encuentra dado de baja"
        }
}

// console.log(darDeBaja(103, estudiantes))
// console.log(estudiantes);




//Consigna: Crea una función generarMails que no reciba parámetros. Debe retornar un nuevo array de strings, donde cada string sea el nombre del alumno en minúsculas seguido de @universidad.edu.ar. Pista: Usa el método map y el método de string toLowerCase().


function generarMails(estudiantes) {
    return estudiantes.map(estudiante => {
        const nombre = estudiante.nombre.toLowerCase()
        return `${nombre}@universidad.edu.ar`
    })
}
// console.log(generarMails(estudiantes))

// ----------------------------------------------------

function generarMails2(estudiantes) {
    return estudiantes.map(estudiante => `${estudiante.nombre.toLowerCase()}@universidad.edu.ar`)
}
// console.log(generarMails2(estudiantes))

// -----------------------------------------------------

function formatearEmail(nombre) {
    return `${nombre.toLowerCase()}@universidad.edu.ar`
}

function generarMails3(estudiantes) {
    return estudiantes.map(estudiante => formatearEmail(estudiante.nombre))
}

console.log(generarMails3(estudiantes));

// -----------------------------------------

// Consigna: Crea una función cuadroDeHonor que retorne un nuevo array solo con los alumnos cuyo promedio de notas sea mayor o igual a 8. Pista: Deberás usar el método filter, y dentro de su condición, llamar a la función calcularPromedio que creaste en el paso 1.

function cuadroDeHonor(estudiantes) {
    return estudiantes.filter(estudiante => calcularPromedio(estudiante.notas) >= 8)
}

console.log(cuadroDeHonor(estudiantes));

// ----------------------------

// Consigna: Crea una función imprimirBoletines que recorra todo el array de estudiantes y muestre en la consola un texto con el siguiente formato para cada uno: "Boletín de [nombre]: Notas -> [nota1] - [nota2] - [nota3] | Promedio: [promedio]". Pista: Puedes usar forEach y el método join para separar las notas con un guión.


function imprimirBoletines(estudiantes) {
    let promedios = [];
    estudiantes.forEach(estudiante => {
        const notasTexto = estudiante.notas.join("-")
        const promedio = calcularPromedio(estudiante.notas)
        console.log(
            `boletin de ${estudiante.nombre}: notas -> ${notasTexto} | promedio: ${promedio.toFixed(2)}`
        );
        promedios.push({
            nombre: estudiante.nombre,
            promedio: promedio,
            notas: estudiante.notas,
        });
        return promedios
    });

}
imprimirBoletines(estudiantes)

// -----------------------------------

// Situación: El Rector está a punto de dar su discurso de cierre de año en el aula magna. Necesita tres datos estadísticos clave para demostrar que la facultad ha recuperado su excelencia académica tras el colapso del sistema. Consigna: Crea una función generarReporte que realice lo siguiente:

// Calcule la cantidad total de alumnos matriculados.
// Calcule el promedio general de la institución (el promedio de todos los promedios de los alumnos).
// Encuentre al Abanderado/a: el alumno que tiene el promedio más alto de toda la facultad.
// Muestre por consola un resumen profesional con este formato: "--- REPORTE DE GESTIÓN ---" "Total de alumnos: [cantidad]" "Promedio Institucional: [promedio]" "Abanderado/a del año: [nombre]"

function generarReporte(estudiantes) {
    //calcular la cantidad de alumnos matriculados
    const totalEstudiantes = estudiantes.length

    //     promedio general de la institucion
    let sumaPromedios = 0
    estudiantes.forEach(estudiante => {
        sumaPromedios += calcularPromedio(estudiante.notas)
    })
    const promedioInstitucional = sumaPromedios / totalEstudiantes
    

    //el abanderado
    let abanderado = estudiantes[0]
    estudiantes.forEach(estudiante => {
        if(calcularPromedio(estudiante.notas) > calcularPromedio(abanderado.notas)){
            abanderado = estudiante
        }
        
    })
    console.log(`Total de alumnos matriculados: ${totalEstudiantes}`);
    console.log(`Promedio general de la Institucion: ${promedioInstitucional.toFixed(2)}`);
    console.log(`Abanderado del año ${abanderado.nombre}`)
    
}

generarReporte(estudiantes)