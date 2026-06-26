import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/products/user/useAuth";
import { useCart } from "../../context/CartContext";

function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isAdmin = user?.role === "admin";

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            🛒 Ecommerce
          </NavLink>

          {/* Toggler para mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Productos
                </NavLink>
              </li>
              {/* Solo admin puede crear productos */}
              {isAdmin && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products/create">
                    ➕ Agregar Producto
                  </NavLink>
                </li>
              )}
              {/* Panel de admin solo visible para admin */}
              {isAdmin && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">
                    ⚙️ Panel Admin
                  </NavLink>
                </li>
              )}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-1">
              {/* Carrito - solo para usuarios autenticados */}
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink className="nav-link position-relative" to="/cart">
                    🛒 Carrito
                    {totalItems > 0 && (
                      <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        style={{ fontSize: "0.65rem" }}
                      >
                        {totalItems}
                      </span>
                    )}
                  </NavLink>
                </li>
              )}

              {/* Login / Register si no está autenticado */}
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user/register">
                      Registrarse
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="btn btn-outline-light btn-sm px-3" to="/user/login">
                      Ingresar
                    </NavLink>
                  </li>
                </>
              )}

              {/* Saludo y Logout si está autenticado */}
              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <span className="navbar-text text-white-50 small">
                      Hola, <strong className="text-white">{user?.name || user?.email}</strong>
                      {isAdmin && <span className="badge bg-danger ms-1 small">Admin</span>}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={handleLogout}
                      className="btn btn-outline-danger btn-sm px-3"
                    >
                      Salir
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
