export default function RecipeInput() {
    return (
        <div className="formWrapper">
            <label htmlFor="recipe_name">
                Recipe Name
                <input
                    type="text"
                    name="recipe_name"
                    placeholder="Name"
                    required
                />
            </label>

            <label htmlFor="instructions">
                Instructions
                <input
                    type="text"
                    name="instructions"
                    placeholder="Instructions"
                    required
                />
            </label>
            <label htmlFor="prep_time">
                Prep time (in min)
                <input
                    type="number"
                    name="prep_time"
                    placeholder="Prep time (in min)"
                    required
                />
            </label>
            <label htmlFor="recipe_story">
                Story
                <input
                    type="text"
                    name="recipe_story"
                    placeholder="Story"
                    required
                />
            </label>

            <div>
                <input
                    type="range"
                    id="difficulty_level"
                    name="difficulty_level"
                    min="0"
                    max="5"
                />
                <label htmlFor="difficulty_level">Difficulty</label>
            </div>
        </div>
    );
}
