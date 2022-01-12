import useAuth from "../auth/useAuth"
import { useLocation } from "react-router-dom";

export default function LoginPage() {
    const {login} = useAuth();
    const location = useLocation();
    const userCredentials = {};
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => login(userCredentials, location.state?.from)}>Log in</button>
        </div>
    )
}
