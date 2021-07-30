const { db } = require("./db");

const getFavRecipesByUserId = async ({ user_id }) => {
    const faveRecipes = await db.query(
        `SELECT recipes.id AS recipe_id, cookbook_id, chapter_id,
        owner_id, recipe_name, instructions, prep_time,
        difficulty_level, recipe_story, photo_url AS recipe_photo
        FROM recipes
        JOIN photos
        ON (photos.recipe_id = recipes.id)
        JOIN favourite_recipes
        ON (favourite_recipes.recipe_id = recipes.id AND favourite_recipes.user_id = $1)
        `,
        [user_id]
    );
    return faveRecipes.rows;
};

module.exports = { getFavRecipesByUserId };
