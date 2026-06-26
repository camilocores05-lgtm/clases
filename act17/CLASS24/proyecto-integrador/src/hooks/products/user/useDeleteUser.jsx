import { useState } from "react";
import { API_URL } from "../../../config";

function useDeleteUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteUser = async (userId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL}/user/${userId}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error(`Error al eliminar usuario: ${response.status}`);
            }
            return true;
        } catch (err) {
            console.error("Error deleting user:", err);
            setError(err);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { deleteUser, loading, error };
}

export default useDeleteUser;
