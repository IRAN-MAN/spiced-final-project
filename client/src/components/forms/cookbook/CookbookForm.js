import { useDispatch } from "react-redux";

import { createNewCookbook } from "../../../redux/action-creators";

import { useStatefulFields } from "../../../hooks/hooks";

//components
import Button from "../../Button";

//constants
import {
    buttonLabels,
    inputPlaceholders,
    newCookbook,
} from "../../constants/constants";

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
        <div>
            <h2>{newCookbook.heading}</h2>
            <p>{newCookbook.subline}</p>
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
                    <span className="input__label">
                        {inputPlaceholders.newCookbook}
                    </span>
                </label>

                <Button
                    labeltext={buttonLabels.createCookbook}
                    type="submit"
                    classNames="button button__submit"
                    icon="arrow_right_alt"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}
