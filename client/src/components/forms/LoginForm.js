import { useStatefulFields, useAuthSubmit } from "../../hooks/hooks";

//components
import Button from "../Button";

export default function LoginForm() {
    const [inputValues, handleChange] = useStatefulFields();
    const [submit, error] = useAuthSubmit("/api/users/login", inputValues);

    return (
        <form onSubmit={submit}>
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
                labeltext="log in"
                type="submit"
                classNames="button submit-button"
                icon="send"
            />
            <p className="message">{error}</p>
        </form>
    );
}