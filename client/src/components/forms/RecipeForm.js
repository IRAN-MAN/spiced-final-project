//components
import axios from "../../axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import IngredientInput from "./IngredientInput";
import RecipeInput from "./RecipeInput";

import sendRecipeInfo from "../../redux/action-creators";

//hooks
import { useAddToIngredients } from "../../hooks/hooks";

export default function RecipeForm() {
    const dispatch = useDispatch();
    const ingredientList = useSelector((state) => state.ingredients);
    const currentCB = useSelector((state) => state.currentCookbook);

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

    const collectRecipeInputes = async (inputValues) => {
        console.log("[collectRecipeInputes]", ingredientList, inputValues);
        const recipeInfo = serialiseDataObject(ingredientList, inputValues);
        const cookbook_id = currentCB[0].cookbook_id;
        const chapter_id = 5;
        const message = await axios.post(
            `/api/recipes/add_recipe?chapter_id=${chapter_id}&cookbook_id=${cookbook_id}`,
            recipeInfo
        );
        console.log("[sendRecipeInfo: axios]", message);
        // dispatch(useAddToIngredients(recipeInfo, chapter_id, cookbook_id));
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
