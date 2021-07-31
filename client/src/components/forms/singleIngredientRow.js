// hooks
import { useStatefulFields } from "../../hooks/hooks";

//components
import Button from "../Button";

export default function SingleIngredientRow(props) {
    const [inputValues, handleChange] = useStatefulFields();
    return (
        <li>
            <label htmlFor="quantity">
                Quantity
                <input
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
                    type="text"
                    name="unit"
                    placeholder="unit"
                    required
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="ingredient">
                ingredient
                <input
                    type="text"
                    name="ingredient"
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
                    console.log("CLICK");
                    props.saveInputToArray(inputValues);
                }}
            />
        </li>
    );
}
