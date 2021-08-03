import { useStatefulFields } from "../../hooks/hooks";

import Button from "../Button";

export default function RecipeInput(props) {
    const [inputValues, handleChange] = useStatefulFields();

    return (
        <div className="authWrapper flex cc fcolumn">
            <label htmlFor="category">
                Category
                <input
                    name="category"
                    placeholder="Category"
                    list="category"
                    required
                    onChange={handleChange}
                />
                <datalist id="category" onChange={handleChange}>
                    <option value="Starters" />
                    <option value="Salad" />
                    <option value="Desert" />
                    <option value="Soups" />
                    <option value="Cakes" />
                    <option value="Cocktails" />
                    <option value="Fast Food" />
                    <option value="Snacks" />
                </datalist>
            </label>
            <label htmlFor="recipe_name">
                Recipe Name
                <input
                    type="text"
                    name="recipe_name"
                    placeholder="Recipe Name"
                    required
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="instructions">
                Instructions
                <textarea
                    type="text"
                    name="instructions"
                    placeholder="Instructions"
                    required
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="prep_time">
                Prep time (in min)
                <input
                    type="number"
                    name="prep_time"
                    placeholder="Prep time (in min)"
                    required
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="recipe_story">
                Story
                <input
                    type="text"
                    name="recipe_story"
                    placeholder="Story"
                    required
                    onChange={handleChange}
                />
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
