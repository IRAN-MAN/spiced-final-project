import { useStatefulFields, useAuthSubmit } from "../../hooks/hooks";

//components
import Button from "../Button";

export default function RegistrationForm() {
    const [submit, error] = useAuthSubmit("/api/users/signup", inputValues);
    const [inputValues, handleChange] = useStatefulFields();

    return (
        <form onSubmit={submit}>
            <label htmlFor="first_name" value="First Name">
                First Name
                <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    placeholder="first name"
                    required
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="last_name">
                Last Name
                <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    placeholder="last name"
                    required
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="email">
                Email
                <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="email"
                    required
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="password">
                Password
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="******"
                    required
                    onChange={handleChange}
                />
            </label>
            <Button
                onClick={submit}
                labeltext="sign up"
                type="submit"
                classNames="button submit-button"
                icon="send"
            />
            <p className="message">{error}</p>
        </form>
    );
}
