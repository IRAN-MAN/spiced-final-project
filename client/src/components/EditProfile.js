import {
    onUserInputChange,
    updateAccount,
    receiveUserInfo,
} from "../redux/action-creators";

// components
import Button from "./Button";

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
        <div className="authWrapper flex fcolumn">
            <form
                onSubmit={(event) => onEditAccountSubmit(event)}
                className="flex fcolumn"
            >
                <label htmlFor="first_name" value="First Name">
                    First Name
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="first name"
                        defaultValue={user.first_name}
                        required
                    />
                </label>
                <label htmlFor="last_name">
                    Last Name
                    <input
                        id="last_name"
                        type="text"
                        name="last_name"
                        placeholder="last name"
                        defaultValue={user.last_name}
                        required
                    />
                </label>
                <label htmlFor="email">
                    Email
                    <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="email"
                        defaultValue={user.email}
                        required
                    />
                </label>
                <label htmlFor="about">
                    About
                    <input
                        id="about"
                        type="text"
                        name="about"
                        placeholder="last name"
                        defaultValue={user.about}
                    />
                </label>
                <label htmlFor="city">
                    City
                    <input
                        id="city"
                        type="text"
                        name="city"
                        placeholder="last name"
                        defaultValue={user.city}
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password"
                        name="new_password"
                        placeholder="******"
                    />
                </label>
                <label htmlFor="repeat_password">
                    Repeat Password
                    <input
                        id="repeat_password"
                        type="password"
                        name="repeat_password"
                        placeholder="******"
                    />
                </label>
                <Button
                    labeltext="Update Info"
                    type="submit"
                    classNames="button submit-button"
                    icon="arrow_right_alt"
                />
            </form>
        </div>
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
        password,
        repeat_password,
    } = event.target;

    if (!password.value) {
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
        await dispatch(
            onUserInputChange({
                first_name: first_name.value,
                last_name: last_name.value,
                email: email.value,
                about: about.value,
                city: city.value,
                password: password.value,
                repeat_password: repeat_password.value,
            })
        );
    }
}
