import { useState } from "react";
import { API_URL } from "../../../config";

function useUpdateUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateUser = async (userId, data) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL}/user/${userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`Error al actualizar usuario: ${response.status}`);
            }
            const updated = await response.json();
            return updated;
        } catch (err) {
            console.error("Error updating user:", err);
            setError(err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { updateUser, loading, error };
}

export default useUpdateUser;
