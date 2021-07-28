//components
import LoginForm from "./forms/LoginForm";
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div>
            <h1>Login with your email!</h1>
            <LoginForm />
            <Link to="/">Login</Link>
        </div>
    );
}
