import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePostProducts from "../hooks/products/usePostProducts"

function CreateProductPage() {
    const [form, setForm] = useState({
        name: "",
        image: "",
        description: "",
        price: 0,
        quantity: 1,
        highlighted: false,
    });
    const navigate = useNavigate()
    const { error, postProduct } = usePostProducts();

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

        const success = await postProduct(form);
        if(success){
            setForm({
            name: "",
            price: 0,
            description: "",
            quantity: 1,
            image: "",
        })
        navigate("/products")
        }
    }

    return (
        <>
            <h1>Crear Producto</h1>

            <form onSubmit={handleFormSubmit} className="form">
                <label htmlFor="name" >Nombre de producto</label>
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
                <br />
                <label htmlFor="description">Descripcion</label>
                <textarea
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
                <button type="submit"> Crear Producto </button>
                <button type="reset"> Borrar form </button>

                {error && <p>{error.message || error}</p>}
            </form>
        </>
    );
}

export default CreateProductPage;
