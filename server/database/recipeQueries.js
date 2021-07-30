const { db } = require("./db");

const getRecipesByCookbookId = async ({ cookbook_id }) => {
    const recipes = await db.query(
        `SELECT recipes.id AS recipe_id, chapter_id, photo_url AS recipe_photo,
        recipe_name, owner_id
        FROM recipes
        JOIN photos ON (recipe_id = recipes.id)
        WHERE (cookbook_id = $1)`,
        [cookbook_id]
    );
    return recipes.rows;
};

const getRecipesById = async ({ recipe_id }) => {
    const recipe = await db.query(
        `SELECT recipes.id AS recipe_id, cookbook_id, chapter_id,
        owner_id, recipe_name, instructions, prep_time, 
        difficulty_level, recipe_story, photo_url AS recipe_photo
        FROM recipes
        JOIN photos
        ON (recipe_id = recipes.id)
        WHERE  (recipes.id = $1)`,
        [recipe_id]
    );
    return recipe.rows[0];
};

module.exports = { getRecipesByCookbookId, getRecipesById };
