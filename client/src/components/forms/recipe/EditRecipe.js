import { instance as axios } from "../../../axios.ts";
import { addIngredients } from "../../../redux/action-creators.ts";

//components
import Backdrop from "../../elements/Backdrop";
import FormWrapper from "../../elements/FormWrapper";
import SingleIngredientRow from "./singleIngredientRow";
import TempIngredientsList from "./TempIngredientsList";

//constants
import {
    buttonLabels,
    editRecipe,
    inputLabels,
    inputPlaceholders,
} from "../../constants/constants";

// hooks
import { useDispatch, useSelector } from "react-redux";

import { useStatefulFields } from "../../../hooks/hooks";

export default function EditRecipe({ toggleOnOff }) {
    const dispatch = useDispatch();

    // const [inputValues, handleChange] = useStatefulFields();
    const currentRecipe = useSelector((state) => state.currentRecipe);
    const editIngredients = useSelector((state) => state.editIngredients);
    const chapters = useSelector((state) => state.chapters);
    const [inputValues, handleChange] = useStatefulFields();

    const addToIngredients = (input) => {
        // console.log("[IngredientInput] input: ", input);
        if (!input.quantity || !input.unit || !input.ingredient_name) {
            return;
        }
        dispatch(addIngredients(input));
        console.log("[addToIngredients]", editIngredients);
    };
    // const deleteIngredient = (id) => {
    //     dispatch(deleteIngredientById(id, ingredients_list));
    // };
    const renderIngredientInput = () => {
        return <SingleIngredientRow saveInputToArray={addToIngredients} />;
    };
    // const renderIngredients = () => {
    //     return ingredients.map((ingredient, index) => {
    //         // console.log("CLICK creation: ", count);
    //         return (
    //             <li key={index}>
    //                 {ingredient.quantity} {ingredient.unit}{" "}
    //                 {ingredient.ingredient_name}
    //                 <button onClick={() => deleteIngredient(index)}>×</button>
    //             </li>
    //         );
    //     });
    // };
    const collectRecipeInputs = async (inputValues) => {
        console.log("InputValues: ", inputValues);

        if (
            !inputValues.recipe_name ||
            !inputValues.instructions ||
            !inputValues.prep_time ||
            !inputValues.category
        ) {
            console.log("No way!");

            return;
        }
        console.log("All good!");

        const recipeInfo = serialiseDataObject(editIngredients, inputValues);

        const message = await axios.post(
            `/api/recipes/edit_recipe/${currentRecipe.recipe_id}`,
            recipeInfo
        );
        console.log("message: ", message);

        toggleOnOff(true);
    };
    const serialiseDataObject = (ingredients, recipe) => {
        return {
            ingredients: ingredients,
            recipeDetails: recipe,
        };
    };

    return (
        <Backdrop toggleOnOff={toggleOnOff}>
            <FormWrapper heading={editRecipe.heading}>
                <div className="wrapper__auth flex cc frow boxShadowS">
                    <div>{renderIngredientInput()}</div>
                    <div>
                        <TempIngredientsList ingredients={editIngredients} />
                    </div>
                </div>
                <div className="wrapper__auth flex cc fcolumn boxShadowS">
                    <label htmlFor="category">
                        {inputLabels.category}
                        <input
                            name="category"
                            placeholder={inputPlaceholders.category}
                            list="category"
                            autoComplete="off"
                            required
                            onChange={handleChange}
                        />
                        <datalist id="category" onChange={handleChange}>
                            {chapters.map((chapter, index) => (
                                <option key={index} value={chapter.category} />
                            ))}
                        </datalist>
                    </label>
                    <label htmlFor="recipe_name">
                        {inputLabels.recipeName}
                        <input
                            type="text"
                            name="recipe_name"
                            placeholder={inputPlaceholders.recipeName}
                            defaultValue={currentRecipe.recipe_name}
                            autoComplete="off"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="instructions">
                        {inputLabels.instructions}
                        <textarea
                            type="text"
                            name="instructions"
                            placeholder={inputPlaceholders.instructions}
                            defaultValue={currentRecipe.instructions}
                            autoComplete="off"
                            required
                            onChange={handleChange}
                        ></textarea>
                    </label>
                    <label htmlFor="prep_time">
                        {inputLabels.preptime}
                        <input
                            type="number"
                            name="prep_time"
                            placeholder={inputPlaceholders.preptime}
                            defaultValue={currentRecipe.prep_time}
                            autoComplete="off"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="recipe_story">
                        {inputLabels.story}
                        <input
                            type="text"
                            name="recipe_story"
                            placeholder={inputPlaceholders.story}
                            defaultValue={currentRecipe.recipe_story}
                            autoComplete="off"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <div>
                        <label htmlFor="difficulty_level">
                            {inputLabels.difficulty}
                            <input
                                type="range"
                                id="difficulty_level"
                                name="difficulty_level"
                                min="0"
                                max="5"
                                className="slider"
                                defaultValue={currentRecipe.difficulty_level}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="button__wrapper">
                        <button
                            type="submit"
                            className="button button__submit"
                            onClick={() => collectRecipeInputs(inputValues)}
                        >
                            <span className="flex">
                                {buttonLabels.updateRecipe}
                                <i className="material-icons">
                                    arrow_right_alt
                                </i>
                            </span>
                        </button>
                    </div>
                </div>
            </FormWrapper>
        </Backdrop>
    );
}
