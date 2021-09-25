import { useStatefulFields } from "../../hooks/hooks";

import Button from "../Button";

export default function RecipeInput(props) {
    const [inputValues, handleChange] = useStatefulFields();

    return (
        <div className="authWrapper flex cc fcolumn">
            <label htmlFor="category" className="input">
                <input
                    id="category"
                    className="input__field"
                    list="categorylist"
                    name="category"
                    placeholder=" "
                    required
                    autoComplete="off"
                    onChange={handleChange}
                />
                <span className="input__label">Category</span>
            </label>
            <datalist id="categorylist" onChange={handleChange}>
                <option value="Starters" />
                <option value="Salad" />
                <option value="Desert" />
                <option value="Soups" />
                <option value="Cakes" />
                <option value="Cocktails" />
                <option value="Fast Food" />
                <option value="Snacks" />
            </datalist>

            <label htmlFor="recipe_name" className="input">
                <input
                    id="recipe_name"
                    className="input__field"
                    name="recipe_name"
                    type="text"
                    placeholder=" "
                    required
                    onChange={handleChange}
                />
                <span className="input__label"> Recipe Name</span>
            </label>

            <label htmlFor="instructions" className="input">
                <textarea
                    id="instructions"
                    className="input__field"
                    name="instructions"
                    placeholder=" "
                    required
                    onChange={handleChange}
                />
                <span className="input__label">Instructions</span>
            </label>

            <label htmlFor="prep_time" className="input">
                <input
                    id="prep_time"
                    className="input__field"
                    name="prep_time"
                    type="number"
                    placeholder=" "
                    required
                    onChange={handleChange}
                />
                <span className="input__label">Prep time (in min)</span>
            </label>

            <label htmlFor="recipe_story" className="input">
                <textarea
                    id="recipe_story"
                    className="input__field"
                    name="recipe_story"
                    placeholder=" "
                    required
                    onChange={handleChange}
                />
                <span className="input__label">Story</span>
            </label>

            <div>
                <label htmlFor="difficulty_level">
                    Difficulty
                    <input
                        type="range"
                        id="difficulty_level"
                        name="difficulty_level"
                        defaultValue="3"
                        min="0"
                        max="5"
                        onChange={handleChange}
                        className="slider"
                    />
                </label>
            </div>
            <Button
                labeltext="add recipe"
                type="submit"
                classNames="button submit-button"
                icon="arrow_right_alt"
                onClick={() => props.collectRecipeInputes(inputValues)}
            />
        </div>
    );
}
