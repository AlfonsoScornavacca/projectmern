import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setuser] = useState(null)
    const contextValue = {
        user
    }
    return (

        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
