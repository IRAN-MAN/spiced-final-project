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
            <div className="cookbookForm flex cc fcolumn">
                <label htmlFor="cookbook_name" className="input">
                    <input
                        id="cookbook_name"
                        className="input__field"
                        type="text"
                        name="cookbook_name"
                        placeholder=" "
                        required
                        onChange={handleChange}
                    />
                    <span className="input__label">Your Cookbook Name</span>
                </label>

                <Button
                    labeltext="Create Cookbook"
                    type="submit"
                    classNames="button submit-button"
                    icon="arrow_right_alt"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}
