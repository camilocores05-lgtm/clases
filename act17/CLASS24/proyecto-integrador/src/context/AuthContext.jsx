import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const SESSION_KEY = "usuario";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = sessionStorage.getItem(SESSION_KEY);
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (err) {
                console.error("Error al parsear usuario de la sesion:", err);
                sessionStorage.removeItem(SESSION_KEY);
            }
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        setUser(userData);
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem(SESSION_KEY);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated: user !== null,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
