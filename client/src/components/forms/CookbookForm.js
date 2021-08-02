import { useDispatch } from "react-redux";

import { createNewCookbook } from "../../redux/action-creators";

import { useStatefulFields } from "../../hooks/hooks";
import Button from "../Button";

export default function CookbookForm(props) {
    const { toggleOnOff } = props;

    const dispatch = useDispatch();
    const [inputValues, handleChange] = useStatefulFields();

    const onClick = () => {
        // event.stoppropagation();
        dispatch(createNewCookbook(inputValues));
        toggleOnOff(true);
    };

    return (
        <div className="authWrapper flex fcolumn">
            <h2>Create your own Cookbook</h2>
            <p>Collect and share all your delicious Recipes </p>
            <div className="flex cc fcolumn">
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
        </div>
    );
}
