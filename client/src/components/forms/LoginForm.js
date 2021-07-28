import { useState } from "react";
import { useStatefulFields } from "../../hooks/hooks";
import axios from "../../axios";

import Button from "../Button";

export default function LoginForm() {
    const [inputValues, handleChange] = useStatefulFields();
    const [message, setMessage] = useState("");

    const onLoginSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/api/users/login", inputValues);
            location.reload();
        } catch (error) {
            console.log(
                "...(onLoginSubmit) Error: ",
                error.response.data.error
            );
            setMessage(error.response.data.error);
        }
    };

    return (
        <form onSubmit={onLoginSubmit}>
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
                onClick={onLoginSubmit}
                labeltext="send"
                type="submit"
                classNames="button login-button"
                icon="send"
            />
            <p className="message">{message}</p>
        </form>
    );
}
