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

const insertRecipe = async ({
    cookbook_id,
    chapter_id,
    owner_id,
    recipe_name,
    instructions,
    prep_time,
    difficulty_level,
    recipe_story,
}) => {
    const newRecipeId = await db.query(
        `INSERT INTO recipes
        (cookbook_id, chapter_id, owner_id, recipe_name,
            instructions, prep_time, difficulty_level, recipe_story)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id AS recipe_id`,
        [
            cookbook_id,
            chapter_id,
            owner_id,
            recipe_name,
            instructions,
            prep_time,
            difficulty_level,
            recipe_story,
        ]
    );
    return newRecipeId.rows[0];
};

const updateRecipe = async ({
    cookbook_id,
    chapter_id,
    owner_id,
    recipe_name,
    instructions,
    prep_time,
    difficulty_level,
    recipe_story,
    recipe_id,
}) => {
    const updatedRecipe = await db.query(
        `UPDATE recipes 
        SET cookbook_id = $1,
        chapter_id = $2,
        owner_id = $3
        recipe_name = $4
        instructions = $5
        prep_time = $6
        difficulty_level = $7
        recipe_story = $8
        WHERE id = $9
        RETURNING * `,
        [
            cookbook_id,
            chapter_id,
            owner_id,
            recipe_name,
            instructions,
            prep_time,
            difficulty_level,
            recipe_story,
            recipe_id,
        ]
    );
    return updatedRecipe.rows[0];
};

const getRecipePhotos = async ({ recipe_id }) => {
    const recipePhotos = await db.query(
        `SELECT id AS photo_id, photo_url AS recipe_photo
        FROM photos
        WHERE (recipe_id = $1)`,
        [recipe_id]
    );
    return recipePhotos.rows;
};

const insertRecipePhoto = async ({ recipe_id, user_id, imgURL }) => {
    const addedRecipePhoto = await db.query(
        `INSERT INTO photos (recipe_id, user_id, photo_url)
        VALUES ($1, $2, $3) RETURNING id AS photo_id, photo_url AS recipe_photo 
        `,
        [recipe_id, user_id, imgURL]
    );
    return addedRecipePhoto.rows[0];
};

module.exports = {
    getRecipesByCookbookId,
    getRecipesById,
    insertRecipe,
    updateRecipe,
    getRecipePhotos,
    insertRecipePhoto,
};
