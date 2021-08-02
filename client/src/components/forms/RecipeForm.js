//components
import axios from "../../axios";
import { useSelector } from "react-redux";

import IngredientInput from "./IngredientInput";
import RecipeInput from "./RecipeInput";

export default function RecipeForm(props) {
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
        if (
            !inputValues.recipe_name ||
            !inputValues.instructions ||
            !inputValues.prep_time
        ) {
            return;
        }
        console.log("[collectRecipeInputes]", ingredientList, inputValues);
        const recipeInfo = serialiseDataObject(ingredientList, inputValues);
        const cookbook_id = currentCB.cookbook_id;
        console.log(cookbook_id);
        const chapter_id = 5;
        const message = await axios.post(
            `/api/recipes/add_recipe?chapter_id=${chapter_id}&cookbook_id=${cookbook_id}`,
            recipeInfo
        );
        console.log("[sendRecipeInfo: axios]", message);
        // dispatch(useAddToIngredients(recipeInfo, chapter_id, cookbook_id));
        props.toggleOnOff(true);
    };

    return (
        <div className="authWrapper flex cc fcolumn scrollY">
            <h2>Add a new delicious Recipe</h2>
            <div>
                <IngredientInput />
                <RecipeInput collectRecipeInputes={collectRecipeInputes} />
            </div>
            <div></div>
            {/* s<p className="message">{message}</p> */}
        </div>
    );
}
