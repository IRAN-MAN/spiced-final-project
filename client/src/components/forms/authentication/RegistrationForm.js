import { useStatefulFields, useAuthSubmit } from "../../../hooks/hooks";

//components
import Button from "../../elements/Button";

//constants
import { inputLabels, buttonLabels } from "../../constants/constants";

export default function RegistrationForm() {
    const [inputValues, handleChange] = useStatefulFields();
    const [submit, error] = useAuthSubmit("/api/users/signup", inputValues);

    return (
        <form onSubmit={submit} className="flex">
            <label htmlFor="first_name" className="input">
                <input
                    id="first_name"
                    className="input__field"
                    type="text"
                    name="first_name"
                    placeholder=" "
                    required
                    onChange={handleChange}
                    autoComplete="given-name"
                />
                <span className="input__label">{inputLabels.firstName}</span>
            </label>
            <label htmlFor="last_name" className="input">
                <input
                    id="last_name"
                    className="input__field"
                    type="text"
                    name="last_name"
                    placeholder=" "
                    required
                    onChange={handleChange}
                    autoComplete="family-name"
                />
                <span className="input__label">{inputLabels.lastName}</span>
            </label>
            <label htmlFor="email" className="input">
                <input
                    id="email"
                    className="input__field"
                    type="text"
                    name="email"
                    placeholder=" "
                    required
                    onChange={handleChange}
                    autoComplete="email"
                />
                <span className="input__label">{inputLabels.email}</span>
            </label>
            <label htmlFor="password" className="input">
                <input
                    id="password"
                    className="input__field"
                    type="password"
                    name="password"
                    placeholder=" "
                    required
                    onChange={handleChange}
                    autoComplete="new-password"
                />
                <span className="input__label">{inputLabels.password}</span>
            </label>
            <label htmlFor="repeat_password" className="input">
                <input
                    id="repeat_password"
                    className="input__field"
                    type="password"
                    name="repeat_password"
                    placeholder=" "
                    required
                    onChange={handleChange}
                    autoComplete="new-password"
                />
                <span className="input__label">
                    {inputLabels.repeatPassword}
                </span>
            </label>
            <Button
                labeltext={buttonLabels.signup}
                type="submit"
                classNames="button button__submit"
                icon="arrow_right_alt"
            />
            <p className="message">{error}</p>
        </form>
    );
}
