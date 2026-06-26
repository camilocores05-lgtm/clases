import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UsePostProducts from "../hooks/products/UsePostProducts"
import usePatchProduct from "../hooks/products/usePatchProduct";
import useGetProductsById from "../hooks/products/useGetProductsById";


function EditProductPage() {
    const [form, setForm] = useState({
        name: "",
        image: "",
        description: "",
        price: 0,
        quantity: 1,
    });

    // Traemos los hooks
    const { error, patchProduct } = usePatchProduct();
    // error: getByIdError -> le cambias el nombre a error
    // No pueden haber dos constantes que se llamen igual
    const { error: getByIdError, getProductsById } = useGetProductsById();

    // como se usan los path params 
    const { id } = useParams();
    // para que sirven los path params?
    // se púede enviar informacion publica por ruta,
    // se puede obtener globalmente  

    const navigate = useNavigate();

    //tenemos que rellenar el formulario con la informacion del producto que queremos editar
    useEffect(() => {
        const loadProduct = async () => {
            //getproductById es la funcion que nos trae el producto por id, la cual esta en el hook useGetProductsById
            const response = await getProductsById(id)
            if (response) {
                setForm({
                    name: response.name,
                    image: response.image,
                    description: response.description,
                    price: response.price,
                    quantity: response.quantity,
                });
            }
        };
        if (id) {
            loadProduct()
        } else {
            console.log({ id })
        }
        // cuando useefect tiene el array de dependencias con un dato sifnifica que :
        //1. se va a ejectuar cuando se recargue la pagina
        //2.se va a volver a ejecutar cuando el elemento array cambie
    }, [id]);
    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setForm({
            ...form,
            [name]: type === "number" ? parseInt(value) || 0 : value,
        });
        console.log(form)
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const success = patchProduct(form, id)


        if (success) {
            setForm({
                name: "",
                price: 0,
                description: "",
                quantity: 1,
                image: "",
            })
            //lugar ideal para colocar una notificacion de exito
            navigate("/products")
        }
    }

    return (
        <>
            <h1>Editar Producto</h1>

            <form onSubmit={handleFormSubmit} className="form">
                <label htmlFor="name">Nombre de producto</label>
                <input
                    onChange={handleInputChange}
                    value={form.name}
                    type="text"
                    required
                    name="name"
                    id="name"
                />
                <br />
                <label htmlFor="image">Url de la imagen</label>
                <input
                    onChange={handleInputChange}
                    value={form.image}
                    type="text"
                    required
                    name="image"
                    id="image"
                />
                <div>
                    <h4 className="form">Preview de imagen</h4>
                    <img style={{ width: "400px", maxWidth: "100%" }}
                        src={form.image}
                        alt="imagen producto"
                    />
                </div>
                
                <br />
                <label htmlFor="description">Descripcion</label>
                <textarea style={{ width: "400px", height: "80px", maxWidth: "100%" }}
                    onChange={handleInputChange}
                    value={form.description}
                    required
                    name="description"
                    id="description"
                ></textarea>
                <br />
                <label htmlFor="price">Precio</label>
                <input
                    onChange={handleInputChange}
                    value={form.price}
                    type="number"
                    required
                    name="price"
                    id="price"
                />
                <br />
                <label htmlFor="quantity">Stock</label>
                <input
                    onChange={handleInputChange}
                    value={form.quantity}
                    type="number"
                    required
                    name="quantity"
                    id="quantity"
                />
                <br />
                <button type="submit"> Editar Producto </button>

                {error && <p>{error.message || error}</p>}
            </form>
        </>
    );
}

export default EditProductPage;
