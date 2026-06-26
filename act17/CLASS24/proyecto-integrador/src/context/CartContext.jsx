import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { API_URL } from "../config";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const { user, isAuthenticated } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    // Load cart when user changes
    useEffect(() => {
        if (isAuthenticated && user) {
            const storedCart = sessionStorage.getItem(`cart_${user.id}`);
            if (storedCart) {
                try {
                    setCartItems(JSON.parse(storedCart));
                } catch (e) {
                    console.error("Error al parsear el carrito:", e);
                    setCartItems([]);
                }
            } else {
                setCartItems([]);
            }
        } else {
            setCartItems([]);
        }
    }, [user, isAuthenticated]);

    // Save cart
    const saveCart = (items) => {
        setCartItems(items);
        if (isAuthenticated && user) {
            sessionStorage.setItem(`cart_${user.id}`, JSON.stringify(items));
        }
    };

    const addToCart = (product) => {
        if (!isAuthenticated) return;
        const existing = cartItems.find(item => item.id === product.id);
        if (existing) {
            // Check stock limit
            if (existing.quantityInCart >= product.quantity) {
                alert(`No puedes agregar más de este producto. Stock disponible: ${product.quantity}`);
                return;
            }
            saveCart(cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantityInCart: item.quantityInCart + 1 }
                    : item
            ));
        } else {
            saveCart([...cartItems, { ...product, quantityInCart: 1 }]);
        }
    };

    const updateQuantity = (productId, amount, maxStock) => {
        if (!isAuthenticated) return;
        const updated = cartItems.map(item => {
            if (item.id === productId) {
                const newQty = item.quantityInCart + amount;
                if (newQty <= 0) return null;
                if (newQty > maxStock) {
                    alert(`No hay suficiente stock disponible. Máximo: ${maxStock}`);
                    return item;
                }
                return { ...item, quantityInCart: newQty };
            }
            return item;
        }).filter(Boolean);
        saveCart(updated);
    };

    const removeFromCart = (productId) => {
        if (!isAuthenticated) return;
        saveCart(cartItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        saveCart([]);
    };

    const checkout = async () => {
        if (!isAuthenticated || !user) return false;
        if (cartItems.length === 0) return false;

        try {
            // Save checkout/purchase in database
            const purchaseData = {
                userId: user.id,
                userEmail: user.email,
                items: cartItems.map(item => ({
                    productId: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantityInCart
                })),
                total: cartItems.reduce((acc, item) => acc + (item.price * item.quantityInCart), 0),
                date: new Date().toISOString()
            };

            const response = await fetch(`${API_URL}/purchases`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(purchaseData)
            });

            if (!response.ok) {
                throw new Error("No se pudo procesar la compra en el servidor");
            }

            clearCart();
            return true;
        } catch (e) {
            console.error("Error al finalizar la compra:", e);
            alert("Hubo un error al procesar la compra: " + e.message);
            return false;
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                updateQuantity,
                removeFromCart,
                clearCart,
                checkout,
                totalItems: cartItems.reduce((sum, item) => sum + item.quantityInCart, 0),
                totalPrice: cartItems.reduce((sum, item) => sum + (item.price * item.quantityInCart), 0)
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
}
