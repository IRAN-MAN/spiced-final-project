//components
import FadeIn from "../FadeIn";

//constants
import {
    buttonLabels,
    editRecipe,
    inputLabels,
    inputPlaceholders,
} from "../constants/constants";

// hooks
import { useSelector } from "react-redux";
// import { useStatefulFields } from "../hooks/hooks";

export default function EditRecipe(props) {
    const { toggleOnOff } = props;
    // const [inputValues, handleChange] = useStatefulFields();
    const currentRecipe = useSelector((state) => state.currentRecipe);
    const currentIngredients = useSelector((state) => state.ingredients_list);
    const chapters = useSelector((state) => state.chapters);

    return (
        <section className="backdrop">
            <FadeIn delay={250} duration={450}>
                <button
                    className="button__closeBackdrop"
                    onClick={() => toggleOnOff(true)}
                >
                    ×
                </button>
                <div>
                    <h2>{editRecipe.heading}</h2>
                    <div>
                        <div className="authWrapper flex cc frow ">
                            <div>
                                <div>
                                    <label htmlFor="quantity">
                                        {inputLabels.quantity}
                                        <input
                                            type="number"
                                            name="quantity"
                                            placeholder={
                                                inputPlaceholders.quantity
                                            }
                                            defaultValue={
                                                currentIngredients.quantity
                                            }
                                            required
                                        />
                                    </label>
                                    <label htmlFor="unit">
                                        {inputLabels.unit}
                                        <input
                                            type="text"
                                            name="unit"
                                            placeholder={inputPlaceholders.unit}
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
                        <div className="authWrapper flex cc fcolumn">
                            <label htmlFor="category">
                                {inputLabels.category}
                                <input
                                    name="category"
                                    placeholder={inputPlaceholders.category}
                                    list="category"
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
            </FadeIn>
        </section>
    );
}
