import useGetProducts from "../hooks/products/useGetProducts.jsx"
import ProductCard from "./ProductCard.jsx"

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
        <ProductCard products={products} />
        </>
    )
}
export default Products