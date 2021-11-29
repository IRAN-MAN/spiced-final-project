//components
import FadeIn from "../FadeIn";

// hooks
import { useSelector } from "react-redux";
// import { useStatefulFields } from "../hooks/hooks";

export default function EditRecipe(props) {
    const { toggleOnOff } = props;
    // const [inputValues, handleChange] = useStatefulFields();
    const currentRecipe = useSelector((state) => state.currentRecipe);
    const currentIngredients = useSelector((state) => state.ingredients_list);
    const chapters = useSelector((state) => state.chapters);
    const ingredients_list = useSelector((state) => state.ingredients_list);

    return (
        <section className="backdrop">
            <FadeIn delay={250} duration={450}>
                <button
                    className="closeBackdropButton"
                    onClick={() => toggleOnOff(true)}
                >
                    ×
                </button>
                <div>
                    <h2>Edit your Recipe</h2>
                    <div>
                        <div className="authWrapper flex cc frow ">
                            <div>
                                <div>
                                    <label htmlFor="quantity">
                                        Quantity
                                        <input
                                            type="number"
                                            name="quantity"
                                            placeholder="quantity"
                                            defaultValue={
                                                currentIngredients.quantity
                                            }
                                            required
                                        />
                                    </label>
                                    <label htmlFor="unit">
                                        Unit
                                        <input
                                            type="text"
                                            name="unit"
                                            placeholder="unit"
                                            required
                                        />
                                    </label>
                                    <label htmlFor="ingredient_name">
                                        ingredient
                                        <input
                                            type="text"
                                            name="ingredient_name"
                                            placeholder="ingredient"
                                            required
                                        />
                                    </label>
                                    <div className="buttonWrapper">
                                        <button
                                            type="submit"
                                            className="button submit-button"
                                        >
                                            <span className="flex">
                                                add ingredient
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
                                Category
                                <input
                                    name="category"
                                    placeholder="Category"
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
                                Recipe Name
                                <input
                                    type="text"
                                    name="recipe_name"
                                    placeholder="Recipe Name"
                                    defaultValue={currentRecipe.recipe_name}
                                    required
                                />
                            </label>
                            <label htmlFor="instructions">
                                Instructions
                                <textarea
                                    type="text"
                                    name="instructions"
                                    placeholder="Instructions"
                                    defaultValue={currentRecipe.instructions}
                                    required
                                ></textarea>
                            </label>
                            <label htmlFor="prep_time">
                                Prep time (in min)
                                <input
                                    type="number"
                                    name="prep_time"
                                    placeholder="Prep time (in min)"
                                    defaultValue={currentRecipe.prep_time}
                                    required
                                />
                            </label>
                            <label htmlFor="recipe_story">
                                Story
                                <input
                                    type="text"
                                    name="recipe_story"
                                    placeholder="Story"
                                    defaultValue={currentRecipe.recipe_story}
                                    required
                                />
                            </label>
                            <div>
                                <label htmlFor="difficulty_level">
                                    Difficulty
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
                            <div className="buttonWrapper">
                                <button
                                    type="submit"
                                    className="button submit-button"
                                >
                                    <span className="flex">
                                        Update Recipe
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
