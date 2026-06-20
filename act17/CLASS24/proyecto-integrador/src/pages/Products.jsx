import useGetProducts from "../hooks/products/useGetProducts.jsx"

function Products() {
    const {error, loading, products} = useGetProducts()

    if(error){
        return (
        <>
        <div className="loading-error-screen">
            <h2>Error al cargar los productos</h2>
            <p>{error?.messsage || String(error)} </p>
            
        </div>
        </>
        )
    }

    if (true) {
        return(
            <>
            <div className="loading-error-screen">
                <h2>Cargando productos...</h2>
                <img className="img" src="./loading-gif.gif" alt="loading" />
            </div>
            </>
        )
    }

    return(
        <>
        <h1>Products</h1>
        <section style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
        }}>
            { products.map((product) => (
            <div style={{
                width: "200px",
                border: "solid black",
                textAlign: "center",
                backgroundColor: "#e9edee",
                display: "flex",
                flexDirection: "column"
            }} key={product.id} >
                <h1 style={ {fontSize: "16px", textTransform: "capitalze"}}>{product.name}</h1>
            </div>

            ) ) }

        </section>
        </>
    )
}
export default Products