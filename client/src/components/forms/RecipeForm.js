//components
import { useState } from "react";
import Button from "../Button";
import IngredientInput from "./IngredientInput";

//hooks
import { useAddToIngredients } from "../../hooks/hooks";

export default function RecipeForm() {
    // const [inputValues, handleChange] = useStatefulFields();
    // const [submit, error] = useRecipeFormSubmit(
    //     "/api/recipes/add_recipe",
    //     inputValues
    // );
    const [ingredients, addIngredient] = useAddToIngredients();

    return (
        <div className="formWrapper">
            Recipeform Component
            <form className="flex">
                <div className="ingredientsInputWrapper">
                    <IngredientInput addIngredient={addIngredient} />
                </div>
                <div className="recipeInputWrapper"></div>

                {/* <p className="message">{error}</p> */}
            </form>
        </div>
    );
}
