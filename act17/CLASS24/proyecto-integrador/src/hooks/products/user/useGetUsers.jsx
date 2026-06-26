import { useState, useEffect, useCallback } from "react";
import { API_URL } from "../../../config";

function useGetUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL}/user`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            // Remove passwords from users list for safety
            const cleanUsers = data.map(({ password, ...u }) => u);
            setUsers(cleanUsers);
        } catch (err) {
            console.error("Error al obtener usuarios:", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return { users, loading, error, refetch: fetchUsers };
}

export default useGetUsers;
