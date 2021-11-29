/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useStatefulFields, useAddToIngredients } from "../../hooks/hooks";
import SingleIngredientRow from "./singleIngredientRow";
import {
    addIngredients,
    deleteIngredientById,
} from "../../redux/action-creators";

export default function IngredientInput() {
    const dispatch = useDispatch();
    const ingredients = useSelector((state) => state.ingredients);

    const addToIngredients = (input) => {
        // console.log("[IngredientInput] input: ", input);
        if (!input.quantity || !input.unit || !input.ingredient_name) {
            return;
        }
        dispatch(addIngredients(input));
        // console.log("[addToIngredients]", ingredients);
    };

    const deleteIngredient = (id) => {
        // console.log("CLICK id: ", id);
        dispatch(deleteIngredientById(id, ingredients));
    };

    useEffect(() => {
        // console.log("[EFFECT: ingredients]", ingredients);
    }, [ingredients]);

    const renderIngredients = () => {
        let count = 0;
        return ingredients.map((ingredient) => {
            count++;
            // console.log("CLICK creation: ", count);
            const a = count;
            return (
                <li key={count}>
                    {ingredient.quantity} {ingredient.unit}{" "}
                    {ingredient.ingredient_name}
                    <button onClick={() => deleteIngredient(a)}>×</button>
                </li>
            );
        });
    };

    const renderIngredientInput = () => {
        return <SingleIngredientRow saveInputToArray={addToIngredients} />;
    };

    return (
        <div className="authWrapper flex cc frow ">
            <div>{renderIngredientInput()}</div>
            <div>
                <ul className="ingredientslist">
                    {ingredients.length > 0 && renderIngredients()}
                </ul>
            </div>
        </div>
    );
}
