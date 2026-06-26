import { useNavigate } from "react-router-dom";
import useDeleteProduct from "../hooks/products/useDeleteProducts";
import useAuth from "../hooks/products/user/useAuth";
import { useCart } from "../context/CartContext";

function ProductCard({ products }) {
    const navigate = useNavigate();
    const { deleteProduct, error } = useDeleteProduct();
    const { user, isAuthenticated } = useAuth();
    const { addToCart } = useCart();

    const isAdmin = user?.role === "admin";

    const handleEditProduct = (e, productId) => {
        e.stopPropagation();
        navigate(`/products/edit/${productId}`);
    };

    const handleDeleteProduct = async (e, productId) => {
        e.stopPropagation();
        if (window.confirm("¿Estás seguro de que querés eliminar este producto?")) {
            const response = await deleteProduct(productId);
            if (response) {
                window.location.reload();
            }
        }
    };

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        addToCart(product);
    };

    const getStatusBadge = (status) => {
        const map = {
            AVAILABLE: { label: "Disponible", cls: "bg-success" },
            NOT_AVAILABLE: { label: "Sin stock", cls: "bg-secondary" },
            DISCONTINUED: { label: "Descontinuado", cls: "bg-danger" },
        };
        const s = map[status] || { label: status, cls: "bg-secondary" };
        return <span className={`badge ${s.cls}`}>{s.label}</span>;
    };

    if (error) {
        return (
            <div className="container my-4">
                <div className="alert alert-danger" role="alert">
                    <strong>Error:</strong> {error.message || String(error)}
                </div>
            </div>
        );
    }

    return (
        <div className="container py-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {products.map((product) => (
                    <div className="col" key={product.id}>
                        <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                            {/* Imagen */}
                            <div style={{ height: "180px", overflow: "hidden", background: "#f8f9fa" }}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-100 h-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                            {/* Body */}
                            <div className="card-body d-flex flex-column p-3">
                                <div className="d-flex align-items-start justify-content-between mb-1">
                                    <h5 className="card-title fw-bold mb-0 text-capitalize" style={{ fontSize: "0.95rem" }}>
                                        {product.name}
                                    </h5>
                                    {product.highlighted && (
                                        <span className="badge bg-warning text-dark ms-1" style={{ fontSize: "0.65rem" }}>
                                            ⭐ Destacado
                                        </span>
                                    )}
                                </div>

                                <p className="card-text text-muted small mb-2" style={{
                                    overflow: "hidden",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical"
                                }}>
                                    {product.description}
                                </p>

                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="fw-bold text-primary fs-5">
                                        ${product.price?.toLocaleString()}
                                    </span>
                                    {getStatusBadge(product.status)}
                                </div>

                                <small className="text-muted mb-3">
                                    Stock: <strong>{product.quantity}</strong>
                                </small>

                                {/* Acciones */}
                                <div className="mt-auto d-flex flex-column gap-2">
                                    {/* Agregar al carrito: solo usuarios autenticados y si hay stock */}
                                    {isAuthenticated && product.status === "AVAILABLE" && product.quantity > 0 && (
                                        <button
                                            className="btn btn-primary btn-sm rounded-pill fw-semibold"
                                            onClick={(e) => handleAddToCart(e, product)}
                                        >
                                            🛒 Añadir al carrito
                                        </button>
                                    )}

                                    {/* Editar y eliminar: solo admin */}
                                    {isAdmin && (
                                        <div className="d-flex gap-2">
                                            <button
                                                className="btn btn-outline-secondary btn-sm flex-fill"
                                                onClick={(e) => handleEditProduct(e, product.id)}
                                            >
                                                ✏️ Editar
                                            </button>
                                            <button
                                                className="btn btn-outline-danger btn-sm flex-fill"
                                                onClick={(e) => handleDeleteProduct(e, product.id)}
                                            >
                                                🗑️ Eliminar
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCard;
