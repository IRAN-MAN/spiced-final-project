//components
import LoginForm from "../forms/authentication/LoginForm";
import FormWrapper from "../elements/FormWrapper";
import { login } from "../constants/constants";

export default function Login() {
    return (
        <FormWrapper heading={login.heading}>
            <div className="flex wrapper__auth boxShadowS">
                <LoginForm />
            </div>
        </FormWrapper>
    );
}
