import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Products from './pages/Products'
import CreateProductPage from './pages/CreateProductPage'
import EditProductPage from './pages/EditProductPage'
import RegisterUserPage from './pages/RegisterUserPage'
import LoginUserPage from './pages/LoginUserPage'
import CartPage from './pages/CartPage'
import AdminPage from './pages/AdminPage'
import ProtectedRoute from './components/ProtectedRoute'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            // Rutas protegidas solo para admin
            {
                path: "/products/create",
                element: (
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <CreateProductPage />
                    </ProtectedRoute>
                )
            },
            {
                path: "/products/edit/:id",
                element: (
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <EditProductPage />
                    </ProtectedRoute>
                )
            },
            {
                path: "/admin",
                element: (
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <AdminPage />
                    </ProtectedRoute>
                )
            },
            // Ruta protegida para usuarios autenticados
            {
                path: "/cart",
                element: (
                    <ProtectedRoute>
                        <CartPage />
                    </ProtectedRoute>
                )
            },
            {
                path: "/user/register",
                element: <RegisterUserPage />
            },
            {
                path: "/user/login",
                element: <LoginUserPage />
            },
            {
                path: "*",
                element: (
                    <div className="container text-center py-5">
                        <h1 className="display-1 fw-bold text-primary">404</h1>
                        <p className="lead text-muted">Página no encontrada</p>
                    </div>
                )
            }
        ]
    }
])