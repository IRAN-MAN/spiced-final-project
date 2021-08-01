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
        <li>
            <label htmlFor="quantity">
                Quantity
                <input
                    ref={quantityInput}
                    type="number"
                    name="quantity"
                    placeholder="quantity"
                    required
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="unit">
                Unit
                <input
                    ref={unitInput}
                    type="text"
                    name="unit"
                    placeholder="unit"
                    required
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="ingredient_name">
                ingredient
                <input
                    ref={nameInput}
                    type="text"
                    name="ingredient_name"
                    placeholder="ingredient"
                    required
                    onChange={handleChange}
                />
            </label>
            <Button
                labeltext="add ingredient"
                type="submit"
                classNames="button submit-button"
                icon="send"
                onClick={() => {
                    props.saveInputToArray(inputValues);
                    quantityInput.current.value = "";
                    unitInput.current.value = "";
                    nameInput.current.value = "";
                }}
            />
        </li>
    );
}
