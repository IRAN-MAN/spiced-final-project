//components
import Backdrop from "../../elements/Backdrop";
import FormWrapper from "../../elements/FormWrapper";
import SingleIngredientRow from "./singleIngredientRow";
//constants
import {
    buttonLabels,
    editRecipe,
    inputLabels,
    inputPlaceholders,
} from "../../constants/constants";
import {
    addIngredients,
    deleteIngredientById,
} from "../../../redux/action-creators";
// hooks
import { useDispatch, useSelector } from "react-redux";
// import { useStatefulFields } from "../hooks/hooks";

export default function EditRecipe({ toggleOnOff }) {
    const dispatch = useDispatch();

    // const [inputValues, handleChange] = useStatefulFields();
    const currentRecipe = useSelector((state) => state.currentRecipe);
    const currentIngredients = useSelector((state) => state.ingredients_list);
    const chapters = useSelector((state) => state.chapters);

    const addToIngredients = (input) => {
        // console.log("[IngredientInput] input: ", input);
        if (!input.quantity || !input.unit || !input.ingredient_name) {
            return;
        }
        dispatch(addIngredients(input));
        // console.log("[addToIngredients]", ingredients);
    };
    const deleteIngredient = (id) => {
        dispatch(deleteIngredientById(id, currentIngredients));
    };
    const renderIngredientInput = () => {
        return <SingleIngredientRow saveInputToArray={addToIngredients} />;
    };
    const renderIngredients = () => {
        return currentIngredients.map((ingredient, index) => {
            // console.log("CLICK creation: ", count);
            return (
                <li key={index}>
                    {ingredient.quantity} {ingredient.unit}{" "}
                    {ingredient.ingredient_name}
                    <button onClick={() => deleteIngredient(index)}>×</button>
                </li>
            );
        });
    };

    return (
        <Backdrop toggleOnOff={toggleOnOff}>
            <FormWrapper heading={editRecipe.heading}>
                <div className="wrapper__auth flex cc frow boxShadowS">
                    <div>{renderIngredientInput()}</div>
                    <div>
                        <ul className="ingredientslist">
                            {currentIngredients.length > 0 &&
                                renderIngredients()}
                        </ul>
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
                        />
                        <datalist id="category">
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
                            />
                        </label>
                    </div>
                    <div className="button__wrapper">
                        <button type="submit" className="button button__submit">
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
