import { useSelector } from "react-redux";
import { useStatefulFields } from "../../hooks/hooks";

//components
import Button from "../Button";

//constants
import { inputLabels, buttonLabels } from "../constants/constants";

export default function RecipeInput(props) {
    const [inputValues, handleChange] = useStatefulFields();
    const chapters = useSelector((state) => state.chapters);

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
                <span className="input__label">{inputLabels.category}</span>
            </label>
            <datalist id="categorylist" onChange={handleChange}>
                {chapters.map((chapter, index) => (
                    <option key={index} value={chapter.category} />
                ))}
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
                <span className="input__label">{inputLabels.recipeName}</span>
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
                <span className="input__label">{inputLabels.instructions}</span>
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
                <span className="input__label">{inputLabels.preptime}</span>
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
                <span className="input__label">{inputLabels.story}</span>
            </label>

            <div>
                <label htmlFor="difficulty_level">
                    {inputLabels.difficulty}
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
                labeltext={buttonLabels.addRecipe}
                type="submit"
                classNames="button button__submit"
                icon="arrow_right_alt"
                onClick={() => props.collectRecipeInputes(inputValues)}
            />
        </div>
    );
}
