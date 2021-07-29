import { useStatefulFields, useAuthSubmit } from "../../hooks/hooks";

//components
import Button from "../Button";

export default function RegistrationForm() {
    const [inputValues, handleChange] = useStatefulFields();
    const [submit, error] = useAuthSubmit("/api/users/signup", inputValues);

    return (
        <form onSubmit={submit} className="flex">
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
            <label htmlFor="repeat_password">
                Repeat Password
                <input
                    id="repeat_password"
                    type="password"
                    name="repeat_password"
                    placeholder="******"
                    required
                    onChange={handleChange}
                />
            </label>
            <Button
                labeltext="sign up"
                type="submit"
                classNames="button submit-button"
                icon="send"
            />
            <p className="message">{error}</p>
        </form>
    );
}
