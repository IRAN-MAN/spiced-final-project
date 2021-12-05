//components
import Backdrop from "../../elements/Backdrop";

//constants
import {
    buttonLabels,
    editRecipe,
    inputLabels,
    inputPlaceholders,
} from "../../constants/constants";

// hooks
import { useSelector } from "react-redux";
// import { useStatefulFields } from "../hooks/hooks";

export default function EditRecipe({ toggleOnOff }) {
    // const [inputValues, handleChange] = useStatefulFields();
    const currentRecipe = useSelector((state) => state.currentRecipe);
    const currentIngredients = useSelector((state) => state.ingredients_list);
    const chapters = useSelector((state) => state.chapters);

    return (
        <Backdrop toggleOnOff={toggleOnOff}>
            <div>
                <h2>{editRecipe.heading}</h2>
                <div>
                    <div className="wrapper__auth flex cc frow boxShadowS">
                        <div>
                            <div>
                                <label htmlFor="quantity">
                                    {inputLabels.quantity}
                                    <input
                                        type="number"
                                        name="quantity"
                                        placeholder={inputPlaceholders.quantity}
                                        defaultValue={
                                            currentIngredients.quantity
                                        }
                                        autoComplete="off"
                                        required
                                    />
                                </label>
                                <label htmlFor="unit">
                                    {inputLabels.unit}
                                    <input
                                        type="text"
                                        name="unit"
                                        placeholder={inputPlaceholders.unit}
                                        autoComplete="off"
                                        required
                                    />
                                </label>
                                <label htmlFor="ingredient_name">
                                    {inputLabels.ingredient}
                                    <input
                                        type="text"
                                        name="ingredient_name"
                                        placeholder={
                                            inputPlaceholders.ingredient
                                        }
                                        autoComplete="off"
                                        required
                                    />
                                </label>
                                <div className="button__wrapper">
                                    <button
                                        type="submit"
                                        className="button button__submit"
                                    >
                                        <span className="flex">
                                            {buttonLabels.addIngredient}
                                            <i className="material-icons">
                                                arrow_right_alt
                                            </i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul className="ingredientslist"></ul>
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
                                    <option
                                        key={index}
                                        value={chapter.category}
                                    />
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
                                    defaultValue={
                                        currentRecipe.difficulty_level
                                    }
                                />
                            </label>
                        </div>
                        <div className="button__wrapper">
                            <button
                                type="submit"
                                className="button button__submit"
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
                </div>
                <div></div>
            </div>
        </Backdrop>
    );
}
