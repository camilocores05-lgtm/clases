import { useState } from "react";
import useGetUsers from "../hooks/products/user/useGetUsers";
import useDeleteUser from "../hooks/products/user/useDeleteUser";
import useUpdateUser from "../hooks/products/user/useUpdateUser";
import useAuth from "../hooks/products/user/useAuth";

function AdminPage() {
    const { users, loading, error, refetch } = useGetUsers();
    const { deleteUser } = useDeleteUser();
    const { updateUser, loading: updatingRole } = useUpdateUser();
    const { user: currentUser } = useAuth();

    const [search, setSearch] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    const filtered = users.filter(
        (u) =>
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = async (userId, userName) => {
        if (userId === currentUser?.id) {
            alert("No puedes eliminar tu propia cuenta.");
            return;
        }
        if (window.confirm(`¿Seguro que querés eliminar al usuario "${userName}"?`)) {
            const ok = await deleteUser(userId);
            if (ok) {
                if (selectedUser?.id === userId) setSelectedUser(null);
                refetch();
            }
        }
    };

    const handleRoleChange = async (userId, currentRole) => {
        const newRole = currentRole === "admin" ? "cliente" : "admin";
        const userName = selectedUser?.name || "este usuario";
        if (!window.confirm(`¿Seguro que querés cambiar el rol de "${userName}" a "${newRole}"?`)) return;
        const updated = await updateUser(userId, { role: newRole });
        if (updated) {
            // Update selected user panel state and refresh list
            setSelectedUser((prev) => ({ ...prev, role: newRole }));
            refetch();
        }
    };

    const roleColor = (role) =>
        role === "admin" ? "badge bg-danger" : "badge bg-secondary";

    if (loading) {
        return (
            <div className="container text-center my-5">
                <div className="spinner-border text-primary" role="status" />
                <p className="mt-3 text-muted">Cargando usuarios...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container my-5">
                <div className="alert alert-danger">{error.message || String(error)}</div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                <div>
                    <h1 className="fw-bold mb-1">Panel de Administración</h1>
                    <p className="text-muted mb-0">Gestión de usuarios del sistema</p>
                </div>
                <span className={roleColor("admin")}>Admin</span>
            </div>

            <div className="row g-4">
                {/* Lista de usuarios */}
                <div className="col-lg-7">
                    <div className="card shadow-sm border-0 rounded-3">
                        <div className="card-header bg-white border-bottom py-3 px-4">
                            <div className="input-group">
                                <span className="input-group-text bg-light border-end-0">🔍</span>
                                <input
                                    type="text"
                                    className="form-control border-start-0 bg-light"
                                    placeholder="Buscar por nombre o email..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    id="user-search"
                                />
                                {search && (
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={() => setSearch("")}
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="card-body p-0">
                            {filtered.length === 0 ? (
                                <div className="text-center py-5 text-muted">
                                    <p className="mb-0">No se encontraron usuarios.</p>
                                </div>
                            ) : (
                                <ul className="list-group list-group-flush">
                                    {filtered.map((u) => (
                                        <li
                                            key={u.id}
                                            className={`list-group-item list-group-item-action d-flex align-items-center justify-content-between px-4 py-3 ${selectedUser?.id === u.id ? "active" : ""}`}
                                            onClick={() => setSelectedUser(u)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <div className="d-flex align-items-center gap-3">
                                                {/* Avatar inicial */}
                                                <div
                                                    className={`rounded-circle d-flex align-items-center justify-content-center fw-bold text-white ${selectedUser?.id === u.id ? "bg-white text-primary" : "bg-primary"}`}
                                                    style={{ width: "42px", height: "42px", fontSize: "1.1rem", minWidth: "42px" }}
                                                >
                                                    {u.name?.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="mb-0 fw-semibold">{u.name}</p>
                                                    <small className={selectedUser?.id === u.id ? "text-white-50" : "text-muted"}>{u.email}</small>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <span className={u.id === currentUser?.id ? "badge bg-warning text-dark" : roleColor(u.role)}>
                                                    {u.id === currentUser?.id ? "Tú" : (u.role || "cliente")}
                                                </span>
                                                {u.id !== currentUser?.id && (
                                                    <button
                                                        className="btn btn-sm btn-outline-danger"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDelete(u.id, u.name);
                                                        }}
                                                    >
                                                        Eliminar
                                                    </button>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="card-footer bg-white border-top text-muted small px-4 py-2">
                            Mostrando {filtered.length} de {users.length} usuarios
                        </div>
                    </div>
                </div>

                {/* Detalle del usuario seleccionado */}
                <div className="col-lg-5">
                    {selectedUser ? (
                        <div className="card shadow-sm border-0 rounded-3 h-100">
                            <div className="card-body p-4">
                                <div className="text-center mb-4">
                                    <div
                                        className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center fw-bold mb-3"
                                        style={{ width: "80px", height: "80px", fontSize: "2rem" }}
                                    >
                                        {selectedUser.name?.charAt(0).toUpperCase()}
                                    </div>
                                    <h4 className="fw-bold mb-1">{selectedUser.name}</h4>
                                    <span className={roleColor(selectedUser.role)}>
                                        {selectedUser.role || "cliente"}
                                    </span>
                                </div>
                                <hr />
                                <div className="mb-3">
                                    <label className="text-muted small fw-semibold text-uppercase mb-1">Email</label>
                                    <p className="mb-0 fw-semibold">{selectedUser.email}</p>
                                </div>
                                <div className="mb-3">
                                    <label className="text-muted small fw-semibold text-uppercase mb-1">ID</label>
                                    <p className="mb-0 fw-semibold font-monospace text-muted small">{selectedUser.id}</p>
                                </div>
                                <div className="mb-4">
                                    <label className="text-muted small fw-semibold text-uppercase mb-2 d-block">Rol</label>
                                    {selectedUser.id !== currentUser?.id ? (
                                        <div className="d-flex align-items-center gap-3">
                                            <span className={roleColor(selectedUser.role)}>
                                                {selectedUser.role || "cliente"}
                                            </span>
                                            <button
                                                className={`btn btn-sm rounded-pill fw-semibold ${selectedUser.role === "admin" ? "btn-outline-secondary" : "btn-outline-danger"}`}
                                                onClick={() => handleRoleChange(selectedUser.id, selectedUser.role)}
                                                disabled={updatingRole}
                                            >
                                                {updatingRole ? (
                                                    <span className="spinner-border spinner-border-sm me-1" role="status" />
                                                ) : (
                                                    selectedUser.role === "admin" ? "⬇️ Quitar Admin" : "⬆️ Hacer Admin"
                                                )}
                                            </button>
                                        </div>
                                    ) : (
                                        <p className="mb-0 fw-semibold text-capitalize">
                                            {selectedUser.role || "admin"}
                                            <span className="badge bg-warning text-dark ms-2 small">Tu cuenta</span>
                                        </p>
                                    )}
                                </div>
                                {selectedUser.id !== currentUser?.id && (
                                    <button
                                        className="btn btn-danger w-100 rounded-pill fw-semibold mt-2"
                                        onClick={() => handleDelete(selectedUser.id, selectedUser.name)}
                                    >
                                        Eliminar Usuario
                                    </button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="card shadow-sm border-0 rounded-3 h-100 d-flex align-items-center justify-content-center text-muted">
                            <div className="text-center py-5 px-4">
                                <div style={{ fontSize: "3rem" }}>👤</div>
                                <p className="mt-3 mb-0">Seleccioná un usuario de la lista para ver sus detalles.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
