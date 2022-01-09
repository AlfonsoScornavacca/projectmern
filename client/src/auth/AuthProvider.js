import { createContext, useState } from "react";
import roles from "../helpers/Roles";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setuser] = useState({id: 1, role: roles.regular});
    const contextValue = {
        user
    }
    return (

        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
