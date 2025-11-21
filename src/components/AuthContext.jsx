import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const AuthContext = createContext();

export function useAuth() {

    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("El useAuth debe utilizarse dentro del contexto");
    } else {
        return ctx;
    }
}


// Provider
export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(
        () => localStorage.getItem("logged_user") === "true"
    );

    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    });


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        localStorage.setItem("logged_user", String(isLoggedIn));
        localStorage.setItem("user", JSON.stringify(user));
    }, [isLoggedIn]);

    const LogIn = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
    }

    const LogOut = () => {
        setUser(null);
        setIsLoggedIn(false)
    };


    return (
        <AuthContext.Provider value={{ isLoggedIn, LogIn, LogOut, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}