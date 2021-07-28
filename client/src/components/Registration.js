//components
import RegistrationForm from "./forms/RegistrationForm";
import { Link } from "react-router-dom";
export default function Registration() {
    return (
        <div className="authentificationWrapper">
            <h1>Sign up and create your own community cookbook</h1>
            <RegistrationForm />
            <Link to="/login">Login</Link>
        </div>
    );
}
