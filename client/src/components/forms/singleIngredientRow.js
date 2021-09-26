import { createRef } from "react";
// hooks
import { useStatefulFields } from "../../hooks/hooks";

//components
import Button from "../Button";

export default function SingleIngredientRow(props) {
    const quantityInput = createRef();
    const unitInput = createRef();
    const nameInput = createRef();
    const [inputValues, handleChange] = useStatefulFields();
    return (
        <div>
            <label htmlFor="quantity" className="input">
                <input
                    id="quantity"
                    ref={quantityInput}
                    className="input__field"
                    type="number"
                    name="quantity"
                    placeholder=" "
                    required
                    onChange={handleChange}
                />
                <span className="input__label">Quantity</span>
            </label>

            <label htmlFor="unit" className="input">
                <input
                    id="unit"
                    ref={unitInput}
                    className="input__field"
                    type="text"
                    name="unit"
                    placeholder=" "
                    required
                    onChange={handleChange}
                />
                <span className="input__label">Unit</span>
            </label>
            <label htmlFor="ingredient_name" className="input">
                <input
                    id="ingredient_name"
                    ref={nameInput}
                    className="input__field"
                    type="text"
                    name="ingredient_name"
                    placeholder=" "
                    required
                    onChange={handleChange}
                />
                <span className="input__label">Ingredient</span>
            </label>
            <Button
                labeltext="add ingredient"
                type="submit"
                classNames="button submit-button"
                icon="arrow_right_alt"
                onClick={() => {
                    props.saveInputToArray(inputValues);
                    quantityInput.current.value = "";
                    unitInput.current.value = "";
                    nameInput.current.value = "";
                }}
            />
        </div>
    );
}
