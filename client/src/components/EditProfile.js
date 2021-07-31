import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useStatefulFields, useAuthSubmit } from "../hooks/hooks";
import Button from "./Button";

export default function EditProfile() {
    const dispatch = useDispatch();
    const [inputValues, handleChange] = useStatefulFields();
    const [submit, error] = useAuthSubmit(
        "/api/users/edit_userInfo",
        inputValues
    );

    const user = useSelector((state) => state.user);

    useEffect(() => {}, []);

    return (
        <div className="formWrapper flex ">
            <p>Edit Profile Component</p>
            <form onSubmit={submit} className="flex fcolumn">
                <label htmlFor="first_name" value="First Name">
                    First Name
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="first name"
                        defaultValue={user.first_name}
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
                        defaultValue={user.last_name}
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
                        defaultValue={user.email}
                        required
                        onChange={handleChange}
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
                        required
                        onChange={handleChange}
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
                        required
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password"
                        name="new_password"
                        placeholder="******"
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
                        onChange={handleChange}
                    />
                </label>
                <Button
                    labeltext="Update Info"
                    type="submit"
                    classNames="button submit-button"
                    icon="send"
                />
                <p className="message">{error}</p>
            </form>
        </div>
    );
}
