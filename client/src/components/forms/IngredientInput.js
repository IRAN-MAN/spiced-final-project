/* eslint-disable react/jsx-key */
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { useStatefulFields, useAddToIngredients } from "../../hooks/hooks";
import SingleIngredientRow from "./singleIngredientRow";
import { addIngredients } from "../../redux/action-creators";

export default function IngredientInput(props) {
    // const [inputValues, handleChange] = useStatefulFields();
    // const [ingredients, addIngredient] = useAddToIngredients();
    // const saveInputToArray = (input) => {
    //     // console.log("INPUT:", input);
    //     addIngredient(input);
    //     console.log("ingredients:", ingredients);
    // };
    const dispatch = useDispatch();
    const ingredients = useSelector((state) => state.ingredients);

    const addToIngredients = (input) => {
        dispatch(addIngredients(input));
        console.log("[addToIngredients]", ingredients);
    };

    useEffect(() => {
        console.log("[EFFECT: ingredients]", ingredients);
    }, [ingredients]);

    const renderIngredients = () => {
        return ingredients.map((ingredient) => {
            return (
                <li>
                    {ingredient.quantity} {ingredient.unit}{" "}
                    {ingredient.ingredient_name}
                </li>
            );
        });
    };

    const renderIngredientInput = () => {
        return (
            <div>
                <SingleIngredientRow saveInputToArray={addToIngredients} />
                <div>
                    <ul>{ingredients.length > 0 && renderIngredients()}</ul>
                </div>
            </div>
        );
    };

    return <ol className="formWrapper">{renderIngredientInput()}</ol>;
}
