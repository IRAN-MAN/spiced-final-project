//components
import LoginForm from "./forms/LoginForm";
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div className="authentificationWrapper">
            <h1>Login with your email!</h1>
            <LoginForm />
            <Link to="/">Sign up</Link>
        </div>
    );
}
