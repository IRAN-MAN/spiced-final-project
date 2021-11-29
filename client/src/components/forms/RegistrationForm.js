import { useStatefulFields, useAuthSubmit } from "../../hooks/hooks";

//components
import Button from "../Button";

export default function RegistrationForm() {
    const [inputValues, handleChange] = useStatefulFields();
    const [submit, error] = useAuthSubmit("/api/users/signup", inputValues);

    return (
        <div className="authWrapper">
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
                        autoComplete="off"
                    />
                    <span className="input__label">First Name</span>
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
                    />
                    <span className="input__label">Last Name</span>
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
                    />
                    <span className="input__label">Email</span>
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
                    <span className="input__label">Password</span>
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
                    />
                    <span className="input__label">Repeat Password</span>
                </label>
                <Button
                    labeltext="sign up"
                    type="submit"
                    classNames="button button__submit"
                    icon="arrow_right_alt"
                />
                <p className="message">{error}</p>
            </form>
        </div>
    );
}
