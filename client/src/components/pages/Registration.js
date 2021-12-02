//components
import RegistrationForm from "../forms/authentication/RegistrationForm";

export default function Registration() {
    return (
        <div className="flex wrapper__auth boxShadowS">
            <h2>Sign up and create your own community cookbook</h2>
            <RegistrationForm />
        </div>
    );
}
