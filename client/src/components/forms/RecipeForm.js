//components
import { useState } from "react";
import { useSelector } from "react-redux";

import IngredientInput from "./IngredientInput";
import RecipeInput from "./RecipeInput";

//hooks
import { useAddToIngredients } from "../../hooks/hooks";

export default function RecipeForm() {
    // const [inputValues, handleChange] = useStatefulFields();
    // const [submit, error] = useRecipeFormSubmit(
    //     "/api/recipes/add_recipe",
    //     inputValues
    // );
    const ingredientList = useSelector((state) => state.ingredients);

    const serialiseDataObject = (ingredients, recipe) => {
        console.log(
            "[serialiseDataObject: ingredients, recipe]",
            ingredients,
            recipe
        );
        return {
            ingredients: ingredients,
            recipeDetails: recipe,
        };
    };

    const collectRecipeInputes = (inputValues) => {
        const recipeInfo = serialiseDataObject(ingredientList, inputValues);
        console.log("[collectRecipeInputes: recipeInfo]", recipeInfo);
    };

    return (
        <div className="formWrapper">
            Recipeform Component
            {/* <form className="flex"> */}
            <div className="ingredientsInputWrapper">
                <IngredientInput />
                <RecipeInput collectRecipeInputes={collectRecipeInputes} />
            </div>
            <div className="recipeInputWrapper"></div>
            {/* <p className="message">{error}</p> */}
            {/* </form> */}
        </div>
    );
}
