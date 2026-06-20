import portada from "../assets/portada.jpeg"

function Home() {
    
return (
    <>
    <h1 className="Title-1">EcoMarca</h1>
    <div className="img-portada-container">
    <img src={portada} className="img-portada" alt="importada" />
    </div>
    </>
)
}

export default Home