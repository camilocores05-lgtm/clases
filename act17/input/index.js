document.addEventListener("DOMContentLoaded", function(){
    //Selectores de elementos
    const textoInput = document.querySelector("#textoInput")
    const colorInput= document.querySelector("#colorInput")
    const fontSizeInput= document.querySelector("#fontSizeInput")
    const textDecorationInput= document.querySelector("#textDecorationInput")
    const fontFamiliyInput= document.querySelector("#fontFamiliyInput")
    const textAlignInput= document.querySelector("#textAlignInput")
    const letterSpacingInput= document.querySelector("#letterSpacingInput")
    const boldCheckbox= document.querySelector("#boldCheckbox")
    const uppercaseCheckbox= document.querySelector("#uppercaseCheckbox")
    const lowercaseCheckbox= document.querySelector("#lowercaseCheckbox")
    const resultado= document.querySelector("#resultado")

    //Funciones
    // Funcion para arctualizar el resultado
    function actualizarTexto(){
        textoInput.value
        const texto = textoInput.value
        resultado.textContent = texto
    }

    // actualizar color
    function ActualizarColor() {
        const color = colorInput.value
        resultado.style.color = color
        
    }

    function actualizarFontSize() {
        const fontSize = `${fontSizeInput.value} px `
        resultado.style.fontSize = fontSizeInput
    }

    function actualizarDecoracion() {
        resultado.style.textDecoration = textDecorationInput.value
    }

    function actualizarDiseño() {
        resultado.style.fontFamily = fontFamiliyInput.value
    }

    function actualizarEspacio() {
        resultado.style.textAlign = textAlignInput.value
    }
    
    function actualizarEspaciado() {
        const letterSpacing = `${letterSpacingInput.value}px`
        resultado.style.letterSpacing = letterSpacingInput
    }
    
    function actualizarBold() {
        resultado.style.fontWeight = boldCheckbox.checked = 

    }
    //continuar con todos los function

    //addeventlistener
    textoInput.addEventListener("input", actualizarTexto)
    colorInput.addEventListener("input", ActualizarColor)
    fontSizeInput.addEventListener("input", actualizarFontSize)
    textDecorationInput.addEventListener("change", actualizarDecoracion)
    fontFamiliyInput.addEventListener("change", actualizarDiseño)
    textAlignInput.addEventListener("change", actualizarEspacio)
    letterSpacingInput.addEventListener("change", actualizarEspaciado)
    boldCheckbox.addEventListener("change", actualizarBold)
})
