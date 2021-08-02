//components
import RegistrationForm from "./forms/RegistrationForm";
import { Link } from "react-router-dom";
export default function Registration() {
    return (
        <div className="flex authWrapper">
            <h2>Sign up and create your own community cookbook</h2>
            <RegistrationForm />
        </div>
    );
}
