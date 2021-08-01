import { useDispatch } from "react-redux";

import { createNewCookbook } from "../../redux/action-creators";

import { useStatefulFields } from "../../hooks/hooks";
import Button from "../Button";

export default function CookbookForm() {
    const dispatch = useDispatch();
    const [inputValues, handleChange] = useStatefulFields();

    const onClick = () => dispatch(createNewCookbook(inputValues));

    return (
        <div className="formWrapper">
            <label htmlFor="cookbook_name" value="First Name">
                Your Cookbook Name
                <input
                    type="text"
                    name="cookbook_name"
                    placeholder="Cookbook Name"
                    required
                    onChange={handleChange}
                />
            </label>
            <Button
                labeltext="Create Cookbook"
                type="submit"
                classNames="button submit-button"
                icon="send"
                onClick={onClick}
            />
        </div>
    );
}
