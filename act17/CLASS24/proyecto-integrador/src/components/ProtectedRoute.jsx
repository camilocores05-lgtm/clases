import { Navigate } from "react-router-dom";
import useAuth from "../hooks/products/user/useAuth";

function ProtectedRoute({ children, allowedRoles }) {
    const { isAuthenticated, user, loading } = useAuth();

    if (loading) {
        return (
            <div className="container text-center my-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        // Redirige al login si no está autenticado
        return <Navigate to="/user/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user?.role)) {
        // Redirige al home si no tiene los permisos requeridos
        alert("Acceso denegado: No tienes permisos para acceder a esta sección.");
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;
