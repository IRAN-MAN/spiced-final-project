//components
import RegistrationForm from "../forms/authentication/RegistrationForm";
import FormWrapper from "../elements/FormWrapper";
import { registration } from "../constants/constants";

export default function Registration() {
    return (
        <FormWrapper heading={registration.heading}>
            <div className="flex wrapper__auth boxShadowS">
                <RegistrationForm />
            </div>
        </FormWrapper>
    );
}
