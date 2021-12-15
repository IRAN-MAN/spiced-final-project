import { instance as axios } from "../../../axios.ts";
import { receiveRecipes } from "../../../redux/action-creators.ts";

//components
import IngredientInput from "./IngredientInput";
import InstructionsInput from "./InstructionsInput";
import { Tooltip } from "../../helpers/tooltip";
import FormWrapper from "../../elements/FormWrapper";
import TempIngredientsList from "./TempIngredientsList";

//constants
import { addRecipe, tooltips } from "../../constants/constants";

//hooks
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../../elements/Button";

export default function RecipeForm({ toggleOnOff }) {
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);

    const editIngredients = useSelector((state) => state.editIngredients);
    const currentCB = useSelector((state) => state.currentCookbook);
    const chapters = useSelector((state) => state.chapters);

    const serialiseDataObject = (ingredients, recipe) => {
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
        if (
            !inputValues.recipe_name ||
            !inputValues.instructions ||
            !inputValues.prep_time ||
            !inputValues.category
        ) {
            return;
        }
        const recipeInfo = serialiseDataObject(editIngredients, inputValues);
        const cookbook_id = currentCB.cookbook_id;
        const chapter_id = getChapterId(chapters, inputValues);
        const message = await axios.post(
            `/api/recipes/add_recipe?chapter_id=${chapter_id}&cookbook_id=${cookbook_id}`,
            recipeInfo
        );
        console.log("message: ", message);

        dispatch(receiveRecipes(cookbook_id));

        toggleOnOff(true);
    };

    return (
        <>
            {step === 1 && (
                <FormWrapper
                    heading={addRecipe.heading}
                    subline={addRecipe.subline_1}
                >
                    <IngredientInput />
                    {/* <TempIngredientsList ingredients={editIngredients} /> */}
                    <Tooltip
                        label={tooltips.addInstructions}
                        className={"tooltipBtn"}
                    >
                        <Button
                            onClick={() => setStep(step + 1)}
                            type="submit"
                            classNames="button button__addRecipe flex cc boxShadowL"
                            icon="send"
                        />
                    </Tooltip>
                </FormWrapper>
            )}
            {step === 2 && (
                <FormWrapper
                    heading={addRecipe.heading}
                    subline={addRecipe.subline_2}
                >
                    <InstructionsInput
                        collectRecipeInputes={collectRecipeInputs}
                    />
                </FormWrapper>
            )}
        </>
    );
}
