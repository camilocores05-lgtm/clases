// Encapsulacion -> ocultar detalles internos y exponer lo necesario
// En javascript solo con # ya es privado
// en typescript
// Public -> Acceder y modifcar desde cualquier lado
// Protected (_) -> Acceder y modificar solo desde las clases hijas
// Privated (#) -> Solo se puede acceder desde la declaracion de la clase

// Podemos tener atributos y metodos privados que son ocultos
// Generalmente son parte de la logica interna de la clase y no queremos que sean accedidos

class Auto {
    precio
    marca
    modelo
    #kilometraje = 0

    //constructor
    //los parametros del contrsuctor se usan cuando se instancia la clase y se le pasa parametro
    constructor(precio, marca, modelo){
        //asignar a los atrubutos valores del constructor
        this.precio = precio
        this.marca = marca
        this.modelo = modelo
    }

    //metodos
    getPrecio(){
        return this.precio
    }

    setPrecio(nuevoPrecio){
        return this.precio = nuevoPrecio
    }

    getKilometraje(){
        return this.#kilometraje
    }

    conducir(kilometros){
        this.#kilometraje += kilometros
        return this.#kilometraje
    }
}

let golTrend = new Auto(3000000, "volkswagen", "gol trend")

//golTrend.precio = false
golTrend.setPrecio(28000000)
console.log(golTrend.getPrecio())
console.log(golTrend.getKilometraje());
golTrend.conducir(500)
console.log(golTrend.getKilometraje());



