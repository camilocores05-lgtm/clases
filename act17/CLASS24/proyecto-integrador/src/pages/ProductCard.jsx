import { useNavigate } from "react-router-dom";
import useDeleteProduct from "../hooks/products/useDeleteProducts";

function ProductCard({ products }) {
    const navigate = useNavigate();
    const {deleteProduct, error} = useDeleteProduct();

    const hanndleEditProduct = (e, productId) => {
        e.stopPropagation();

        navigate(`/products/edit/${productId}`);
    }

    const hanndleDeleteProduct = async (e, productId) => {
        e.stopPropagation();
        if(window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
            const response = await deleteProduct(productId)
            console.log(response)
            if (response) {
                window.location.reload()
                //lo mejor al borrar es volver a ejecutar el hook get de productos para que se actualice la lista de productos
                return
            }
        }
    }

    if(error){
        return (
        <>
        <div className="loading-error-screen">
            <h2>Error al borrar el producto</h2>
            <p>{error? error.message || String(error) : null} </p>
            
        </div>
        </>
        )
    }


    return (
        <div>
            <section style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
            }}
            >

                {/* LA MERA CARD */}
                {products.map((product) => (
                    <div style={{
                        width: "200px",
                        border: "solid black",
                        textAlign: "center",
                        backgroundColor: "#e9edee",
                        display: "flex",
                        flexDirection: "column"
                    }} key={product.id} >
                        <h1 style={{ fontSize: "16px", textTransform: "capitalze" }}>{product.name}</h1>
                        {/* name
            price
            description
            quantity
            highlighted
            image
             */}

                        <img style={{ width: "100%", height: "120px" }} src={product.image} alt={product.name} />

                        <p style={{ fontSize: "16px", textTransform: "capitalze" }}> {product.description} </p>
                        <p> {product.price} </p>
                        <p> Stock Disponible {product.quantity}</p>
                        {product.highlighted && (<p style={{ fontWeight: "bolder", color: "green" }}> Producto destacado </p>
                        )
                        }
                        
                        <button onClick={(e) => hanndleEditProduct(e, product.id)}>Editar</button>
                        <button onClick={(e) => hanndleDeleteProduct(e, product.id)}>Eliminar</button>
                        


                    </div>

                ))}

            </section>
        </div>
    )
} 

export default ProductCard;
