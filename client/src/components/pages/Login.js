//components
import LoginForm from "../forms/authentication/LoginForm";

export default function Login() {
    return (
        <div className="flex wrapper__auth boxShadowS">
            <h2>Login with your email!</h2>
            <LoginForm />
        </div>
    );
}