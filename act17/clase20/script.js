document.addEventListener("DOMContentLoaded", () => {


    //inicializar las variables
    let likeCounter = 0
//selectores
// incrementa los likes
    const likeButton = document.getElementById("likeButton")
    //muestra el valor numerico de los likes
    const likeCountDisplay = document.getElementById("likeCount")
    //reset de likes
    const resetLikeButton = document.getElementById("resetLikeButton")

    function loadLikes() {
        //poca informacion, guardada localmente y obtenida globalmente
        const savedCount = localStorage.getItem("myLikeCount")
        //si savedcount existe
        //ademas reviso si realemte es un numero
        if(savedCount !== null &&!isNaN(savedCount)){
            likeCounter = parseInt(savedCount)
        likeCountDisplay.textContent = likeCounter
        }
    }

    // se encarga de guardar los likes
    function saveLikes() {
        localStorage.setItem("myLikeCount", likeCounter)
    }

    likeButton.addEventListener("click", () =>{
        likeCounter++

        likeCountDisplay.textContent = likeCounter

        saveLikes()
        //efecto pop
        likeCountDisplay.classList.add("pop")

        setTimeout(() => {
            likeCountDisplay.classList.remove("pop")
        }, 200)
    })

    resetLikeButton.addEventListener("click", () => {
        likeCounter = 0 
        likeCountDisplay.textContent = likeCounter

        saveLikes()

        loadLikes()
    })

    loadLikes()
})