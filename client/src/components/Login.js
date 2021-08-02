//components
import LoginForm from "./forms/LoginForm";
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div className="flex authWrapper">
            <h2>Login with your email!</h2>
            <LoginForm />
        </div>
    );
}
