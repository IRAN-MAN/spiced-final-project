import {
    onUserInputChange,
    updateAccount,
    receiveUserInfo,
} from "../redux/action-creators";

// components
import Button from "./Button";
import FadeIn from "./FadeIn";
// hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function EditProfile() {
    const dispatch = useDispatch();
    let history = useHistory();
    const user = useSelector((state) => state.user);
    const userInput = useSelector((state) => state.userInput);

    const onEditAccountSubmit = async (event) => {
        event.preventDefault();
        await dispatchUserInput(event, dispatch);
        history.push("/");
    };

    useEffect(() => {
        if (userInput.first_name) {
            dispatch(updateAccount(userInput));
            dispatch(receiveUserInfo(user.id));
        }
    }, [userInput]);

    return (
        <FadeIn delay={250} duration={850}>
            <div className="authWrapper flex fcolumn">
                <form
                    onSubmit={(event) => onEditAccountSubmit(event)}
                    className="flex fcolumn"
                >
                    <label htmlFor="first_name" className="input">
                        <input
                            id="first_name"
                            className="input__field"
                            type="text"
                            name="first_name"
                            placeholder=" "
                            defaultValue={user.first_name}
                            required
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
                            defaultValue={user.last_name}
                            required
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
                            defaultValue={user.email}
                            required
                        />
                        <span className="input__label">Email</span>
                    </label>
                    <label htmlFor="about" className="input">
                        <input
                            id="about"
                            className="input__field"
                            type="text"
                            name="about"
                            placeholder=" "
                            defaultValue={user.about}
                            required
                        />
                        <span className="input__label">About</span>
                    </label>

                    <label htmlFor="city" className="input">
                        <input
                            id="city"
                            className="input__field"
                            type="text"
                            name="city"
                            placeholder=" "
                            defaultValue={user.city}
                            required
                        />
                        <span className="input__label">City</span>
                    </label>
                    <label htmlFor="new_password" className="input">
                        <input
                            id="new_password"
                            className="input__field"
                            type="password"
                            name="new_password"
                            placeholder="******"
                        />
                        <span className="input__label">Password</span>
                    </label>
                    <label htmlFor="repeat_password" className="input">
                        <input
                            id="repeat_password"
                            className="input__field"
                            type="password"
                            name="repeat_password"
                            placeholder="******"
                        />
                        <span className="input__label">Repeat Password</span>
                    </label>
                    <Button
                        labeltext="Update Info"
                        type="submit"
                        classNames="button button__submit"
                        icon="arrow_right_alt"
                    />
                </form>
            </div>
        </FadeIn>
    );
}

async function dispatchUserInput(event, dispatch) {
    console.log("...(dispatchUserInput)");
    const {
        first_name,
        last_name,
        email,
        about,
        city,
        new_password,
        repeat_password,
    } = event.target;
    console.log("password: ", new_password.value);
    console.log("repeat: ", repeat_password.value);
    if (!new_password.value) {
        await dispatch(
            onUserInputChange({
                first_name: first_name.value,
                last_name: last_name.value,
                email: email.value,
                about: about.value,
                city: city.value,
            })
        );
    } else {
        console.log(
            "!!!: ",
            first_name.value,
            last_name.value,
            email.value,
            city.value,
            about.value
        );

        console.log("password: ", new_password.value);
        console.log("repeat: ", repeat_password.value);
        await dispatch(
            onUserInputChange({
                first_name: first_name.value,
                last_name: last_name.value,
                email: email.value,
                about: about.value,
                city: city.value,
                new_password: new_password.value,
                repeat_password: repeat_password.value,
            })
        );
    }
}
