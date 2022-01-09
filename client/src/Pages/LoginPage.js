import useAuth from "../auth/useAuth"

export default function LoginPage() {
    const {login} = useAuth();
    const userCredentials = {};
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => login(userCredentials)}>Log in</button>
        </div>
    )
}
