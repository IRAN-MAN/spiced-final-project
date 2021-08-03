//components
import axios from "../../axios";
import { useSelector, useDispatch } from "react-redux";

import IngredientInput from "./IngredientInput";
import RecipeInput from "./RecipeInput";
import { receiveRecipes } from "../../redux/action-creators";

export default function RecipeForm(props) {
    const dispatch = useDispatch();

    const ingredientList = useSelector((state) => state.ingredients);
    const currentCB = useSelector((state) => state.currentCookbook);
    const chapters = useSelector((state) => state.chapters);

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

    const getChapterId = (chapters, inputValues) => {
        let cid = null;
        chapters.map((chapter) => {
            if (chapter.category == inputValues.category) {
                cid = chapter.id;
            }
        });
        return cid;
    };

    const collectRecipeInputes = async (inputValues) => {
        console.log("[collectRecipeInputes: inputValues]", inputValues);
        if (
            !inputValues.recipe_name ||
            !inputValues.instructions ||
            !inputValues.prep_time ||
            !inputValues.category
        ) {
            return;
        }
        console.log("[collectRecipeInputes]", ingredientList, inputValues);
        const recipeInfo = serialiseDataObject(ingredientList, inputValues);
        const cookbook_id = currentCB.cookbook_id;
        // console.log("[collectRecipeInputes: recipeInfo]", recipeInfo);
        const chapter_id = getChapterId(chapters, inputValues);
        // console.log("[collectRecipeInputes: chapter id]", chapter_id);
        const message = await axios.post(
            `/api/recipes/add_recipe?chapter_id=${chapter_id}&cookbook_id=${cookbook_id}`,
            recipeInfo
        );
        console.log("[sendRecipeInfo: axios]", message);
        // dispatch(useAddToIngredients(recipeInfo, chapter_id, cookbook_id));
        dispatch(receiveRecipes(cookbook_id));

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
