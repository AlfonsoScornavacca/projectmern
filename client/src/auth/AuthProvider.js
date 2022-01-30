import { createContext, useState } from "react";
import roles from "../helpers/Roles";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const login = (userCredentials, fromLocation) => {
        setUser ({id: 1, name: 'User name', email: 'user@email.com', role: roles.admin}) 
    };

    const updateUser = (data) => {
        setUser({
            ...user,
            ...data
        })
    }
    const logout = () => setUser (null);
    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;
    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout,
        updateUser
    }
    return (

        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
