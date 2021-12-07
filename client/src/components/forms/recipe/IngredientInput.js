/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { useStatefulFields, useAddToIngredients } from "../../hooks/hooks";

//components
import SingleIngredientRow from "./singleIngredientRow";
import TempIngredientsList from "./TempIngredientsList";
import {
    addIngredients,
    deleteIngredientById,
} from "../../../redux/action-creators";

export default function IngredientInput() {
    const dispatch = useDispatch();
    const editIngredients = useSelector((state) => state.editIngredients);

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
        dispatch(deleteIngredientById(id, editIngredients));
    };

    useEffect(() => {
        // console.log("[EFFECT: ingredients]", ingredients);
    }, [editIngredients]);

    // const renderIngredients = () => {
    //     return ingredients.map((ingredient, index) => {
    //         return (
    //             <li key={index}>
    //                 {ingredient.quantity} {ingredient.unit}{" "}
    //                 {ingredient.ingredient_name}
    //                 <button onClick={() => deleteIngredient(index)}>×</button>
    //             </li>
    //         );
    //     });
    // };

    const renderIngredientInput = () => {
        return <SingleIngredientRow saveInputToArray={addToIngredients} />;
    };

    return (
        <div className="wrapper__auth flex cc frow boxShadowS">
            <div>{renderIngredientInput()}</div>
            <div>
                <TempIngredientsList ingredients={editIngredients} />
                {/* <ul className="ingredientslist">
                    {ingredients.length > 0 && renderIngredients()}
                </ul> */}
            </div>
        </div>
    );
}
