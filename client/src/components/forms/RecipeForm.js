//components
import { useState } from "react";
import Button from "../Button";
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

    const serialiseDataObject = () => {
        console.log("serialiseDataObject");
    };

    return (
        <div className="formWrapper">
            Recipeform Component
            {/* <form className="flex"> */}
            <div className="ingredientsInputWrapper">
                <IngredientInput />
                <RecipeInput />
            </div>
            <div className="recipeInputWrapper"></div>
            <Button
                labeltext="add recipe"
                type="submit"
                classNames="button submit-button"
                icon="send"
                onClick={serialiseDataObject}
            />
            {/* <p className="message">{error}</p> */}
            {/* </form> */}
        </div>
    );
}
