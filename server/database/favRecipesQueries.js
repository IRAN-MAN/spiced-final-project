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

const getMostFavRecipe = async () => {
    const mostFav = await db.query(
        `SELECT recipes.id AS recipe_id, cookbook_id, chapter_id,
        owner_id, recipe_name, instructions, prep_time,
        difficulty_level, recipe_story, photo_url AS recipe_photo
        FROM recipes
        JOIN photos
        ON (photos.recipe_id = recipes.id)
        CROSS JOIN favourite_recipes
        WHERE favourite_recipes.recipe_id = (SELECT favourite_recipes.recipe_id, count(*)
                            FROM favourite_recipes
                            GROUP BY recipe_id
                            ORDER BY count(*) ASC LIMIT 1) `
    );
    return mostFav.rows[0];
};

const insertFavRecipe = async ({ recipe_id, user_id }) => {
    const addedRecipe = await db.query(
        "INSERT INTO favourite_recipes (user_id, recipe_id) VALUES ($1, $2) RETURNING *",
        [user_id, recipe_id]
    );
    return addedRecipe.rows[0];
};

const deleteFavRecipe = async ({ recipe_id }) => {
    await db.query("DELETE FROM favourite_recipes WHERE recipe_id = $1", [
        recipe_id,
    ]);
};

module.exports = {
    getFavRecipesByUserId,
    getMostFavRecipe,
    insertFavRecipe,
    deleteFavRecipe,
};
