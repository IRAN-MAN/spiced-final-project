import axios from "../../axios";
import { receiveRecipes } from "../../redux/action-creators";

//components
import IngredientInput from "./IngredientInput";
import RecipeInput from "./RecipeInput";

//hooks
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../Button";

export default function RecipeForm(props) {
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);

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
        let chapterId = null;
        chapters.map((chapter) => {
            if (chapter.category == inputValues.category) {
                chapterId = chapter.id;
            }
        });
        return chapterId;
    };

    const collectRecipeInputs = async (inputValues) => {
        console.log("[collectRecipeInputes: inputValues]", inputValues);
        if (
            !inputValues.recipe_name ||
            !inputValues.instructions ||
            !inputValues.prep_time ||
            !inputValues.category
        ) {
            return;
        }
        console.log("[collectRecipeInputs]", ingredientList, inputValues);
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
        <div>
            <h2>Add a new delicious Recipe</h2>

            <div>
                {step === 1 && (
                    <div>
                        <p>First add all your ingredients!</p>
                        <IngredientInput />
                        <div className="tooltip tooltipBtn">
                            <span className="tooltiptext">
                                Add instructions
                            </span>
                            <Button
                                onClick={() => setStep(step + 1)}
                                type="submit"
                                classNames="button button__addRecipe flex cc boxShadowL"
                                icon="send"
                            />
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <p>Now add your instructions! </p>
                        <RecipeInput
                            collectRecipeInputes={collectRecipeInputs}
                        />
                    </div>
                )}
            </div>
            <div></div>
            {/* s<p className="message">{message}</p> */}
        </div>
    );
}
