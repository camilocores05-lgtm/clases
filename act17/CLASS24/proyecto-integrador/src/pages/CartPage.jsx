import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

function CartPage() {
    const { cartItems, updateQuantity, removeFromCart, totalPrice, checkout } = useCart();
    const navigate = useNavigate();

    const handleCheckout = async () => {
        const confirmCheckout = window.confirm("¿Deseas finalizar la compra?");
        if (confirmCheckout) {
            const success = await checkout();
            if (success) {
                alert("¡Compra simulada con éxito! Se ha guardado en la API.");
                navigate("/");
            }
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="container py-5 text-center">
                <div className="card shadow-sm p-5 border-0 rounded-3 bg-light">
                    <div className="mb-4">
                        <i className="bi bi-cart-x text-muted" style={{ fontSize: "4rem" }}></i>
                    </div>
                    <h2 className="mb-3 fw-bold text-dark">Tu carrito está vacío</h2>
                    <p className="text-muted mb-4">¡Explora nuestra tienda y encuentra productos increíbles!</p>
                    <Link to="/products" className="btn btn-primary px-4 py-2 rounded-pill fw-semibold shadow-sm">
                        Ver Productos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="mb-4 fw-bold text-dark border-bottom pb-3">Tu Carrito de Compras</h1>
            <div className="row g-4">
                {/* Lista de productos */}
                <div className="col-lg-8">
                    <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                        <ul className="list-group list-group-flush">
                            {cartItems.map((item) => (
                                <li key={item.id} className="list-group-item p-4">
                                    <div className="row align-items-center g-3">
                                        {/* Imagen */}
                                        <div className="col-md-2 text-center">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="img-fluid rounded shadow-sm"
                                                style={{ maxHeight: "80px", objectFit: "cover" }}
                                            />
                                        </div>
                                        {/* Info */}
                                        <div className="col-md-4">
                                            <h5 className="mb-1 fw-bold text-dark">{item.name}</h5>
                                            <p className="text-muted mb-0 small">{item.description}</p>
                                        </div>
                                        {/* Precio unitario */}
                                        <div className="col-md-2 text-center text-md-start">
                                            <span className="text-primary fw-semibold">${item.price.toLocaleString()}</span>
                                        </div>
                                        {/* Control de cantidad */}
                                        <div className="col-md-3 col-6 text-center">
                                            <div className="input-group input-group-sm justify-content-center">
                                                <button
                                                    className="btn btn-outline-secondary px-3"
                                                    onClick={() => updateQuantity(item.id, -1, item.quantity)}
                                                >
                                                    -
                                                </button>
                                                <span className="input-group-text bg-white px-3 fw-semibold">
                                                    {item.quantityInCart}
                                                </span>
                                                <button
                                                    className="btn btn-outline-secondary px-3"
                                                    onClick={() => updateQuantity(item.id, 1, item.quantity)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div className="small text-muted mt-1">Stock: {item.quantity}</div>
                                        </div>
                                        {/* Eliminar */}
                                        <div className="col-md-1 col-6 text-end">
                                            <button
                                                className="btn btn-link text-danger p-0"
                                                onClick={() => removeFromCart(item.id)}
                                                title="Eliminar producto"
                                            >
                                                <i className="bi bi-trash3" style={{ fontSize: "1.2rem" }}>Eliminar</i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Resumen de compra */}
                <div className="col-lg-4">
                    <div className="card shadow-sm border-0 rounded-3 bg-light p-4">
                        <h4 className="fw-bold mb-4 text-dark border-bottom pb-2">Resumen de Compra</h4>
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Productos ({cartItems.reduce((acc, item) => acc + item.quantityInCart, 0)})</span>
                            <span className="fw-semibold text-dark">${totalPrice.toLocaleString()}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-4 border-top pt-3">
                            <span className="fw-bold text-dark h5">Total</span>
                            <span className="fw-bold text-primary h5">${totalPrice.toLocaleString()}</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="btn btn-success w-100 py-3 rounded-pill fw-bold shadow-sm"
                        >
                            Finalizar Compra
                        </button>
                        <div className="text-center mt-3">
                            <Link to="/products" className="text-decoration-none small fw-semibold text-primary">
                                ← Continuar comprando
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
