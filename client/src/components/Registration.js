//components
import RegistrationForm from "./forms/RegistrationForm";

export default function Registration() {
    return (
        <div className="flex authWrapper">
            <h2>Sign up and create your own community cookbook</h2>
            <RegistrationForm />
        </div>
    );
}
