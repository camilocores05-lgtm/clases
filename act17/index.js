//le estoy diciendo al dom que ejecute lea el codigo que está dentro del bloque de codigo
// addEventListener significa escucha de eventos, esto signficia que va a estar pendiente d ecierto evento y puede ejcutar codigo cuando el evento sucede
// DOMContentLoaded es el evento -> espera que se cargue el contenido con el dom

document.addEventListener("DOMContentLoaded", function () {
    //Usar selectores para traer los elementos con los que vamos a trabajar
    //querySelector es una funcuion que permite seleccionar cualquier elemento de nuestro DOM, etiquetas, clases, ids
    const titulo = document.querySelector(".titulo")
    const texto = document.querySelector(".texto")
    const inputTexto = document.querySelector(".input-texto")

    // Definir funciones que modifican clases de los elementos

    // Crear una funcion para pasarle la clase black al ultimo elemento
    function agregarBold() {
        texto.classList.add("blue")
    }

    titulo.addEventListener("click", () => {
        titulo.classList.toggle("red")
    })

    // titulo.onclick = () => {
    //     titulo.classList.toggle("red")
    // }

    function quitarBold() {
        texto.classList.remove("blue")
    }
    // Escuchaamos un evento y aplicamos el estilo
    //
    texto.addEventListener("mouseover", agregarBold)

    texto.addEventListener("mouseout", quitarBold)
})

function actualizarTexto(){
    console.log(texto.textContent)
    texto.textContent = inputTexto.value
    console.log(inputTexto.value)
}

inputTexto.addEventListener("input", actualizarTexto)