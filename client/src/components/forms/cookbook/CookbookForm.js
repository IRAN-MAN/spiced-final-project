//redux
import { useDispatch } from "react-redux";
import { createNewCookbook } from "../../../redux/action-creators";

//hooks
import { useStatefulFields } from "../../../hooks/hooks";

//components
import Button from "../../elements/Button";
import FormWrapper from "../../elements/FormWrapper";

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
        <FormWrapper
            heading={newCookbook.heading}
            subline={newCookbook.subline}
        >
            <div className="wrapper__auth cookbookForm flex cc fcolumn boxShadowS">
                <label htmlFor="cookbook_name" className="input">
                    <input
                        id="cookbook_name"
                        className="input__field"
                        type="text"
                        name="cookbook_name"
                        placeholder=" "
                        required
                        onChange={handleChange}
                        autoComplete="off"
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
        </FormWrapper>
    );
}
