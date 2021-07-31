import Button from "../Button";

import { useEffect, useState } from "react";
import { useStatefulFields, useAddToIngredients } from "../../hooks/hooks";
import SingleIngredientRow from "./singleIngredientRow";

export default function IngredientInput(props) {
    const [inputValues, handleChange] = useStatefulFields();

    const [ingredients, addIngredient] = useAddToIngredients();

    useEffect(() => {}, [ingredients]);

    const saveInputToArray = (input) => {
        console.log("INPUT:", input);
        addIngredient(input);
        console.log("ingredients:", ingredients);
    };

    const renderIngredientInput = () => {
        return (
            <div>
                <SingleIngredientRow saveInputToArray={saveInputToArray} />
                <div>
                    {ingredients.length > 0 &&
                        ingredients.quantity + " " + ingredients.unit}
                </div>
            </div>
        );
    };

    return <ol className="formWrapper">{renderIngredientInput()}</ol>;
}
