import { useStatefulFields, useAuthSubmit } from "../../../hooks/hooks";

//components
import Button from "../../Button";

//constants
import { inputLabels, buttonLabels } from "../../constants/constants";

export default function LoginForm() {
    const [inputValues, handleChange] = useStatefulFields();
    const [submit, error] = useAuthSubmit("/api/users/login", inputValues);

    return (
        <div className="authWrapper">
            <form onSubmit={submit} className="flex">
                <label htmlFor="email" className="input">
                    <input
                        id="email"
                        className="input__field"
                        type="text"
                        name="email"
                        placeholder=" "
                        required
                        onChange={handleChange}
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
                    />
                    <span className="input__label">{inputLabels.password}</span>
                </label>
                <Button
                    labeltext={buttonLabels.login}
                    type="submit"
                    classNames="button button__submit"
                    icon="arrow_right_alt"
                />
                <p className="message">{error}</p>
            </form>
        </div>
    );
}