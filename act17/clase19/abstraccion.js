class Calculadora {
    //Atributos
    //# lo protege contra escritura, le brinad privacidad
    //impide lectura y escritura directa de atributo desde afuera
    #historial

    //constructor es quien ensambla la clase
    // toma todos los atributos que le des y los usa en la clase
    constructor(){
        this.#historial = []
    }

    //metodos
    #guardarEnHistorial(a, b, operacion, resultado){
        this.#historial.push({a, b, operacion, resultado, fecha: new Date().toLocaleString()})
    }

    sumar(a, b){
        let resultado = a + b;
        this.#guardarEnHistorial(a, b, "sumar", resultado)
        return resultado
    }

    restar(a, b){
        let resultado = a - b;
        this.#guardarEnHistorial(a, b, "restar", resultado)
        return resultado
    }

    multiplicar(a, b){
        let resultado = a * b;
        this.#guardarEnHistorial(a, b, "multiplicar", resultado)
        return resultado
    }

    dividir(a, b){
        let resultado = a / b;
        this.#guardarEnHistorial(a, b, "dividir", resultado)
        return resultado
    }

    getHistorial(){
        return this.#historial;
    }
} 
//instanciamos la clase
let calculadora = new Calculadora()
calculadora.sumar(10,50)
console.log(calculadora.sumar(10, 20));
console.log(calculadora.restar(100, 50));
console.log(calculadora.multiplicar(10, 10));
console.log(calculadora.dividir(100, 2));
console.log(calculadora.getHistorial());
