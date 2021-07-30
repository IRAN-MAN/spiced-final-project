const {
    getRecipesByCookbookId,
    getRecipesById,
} = require("../database/recipeQueries");

const recipeInfo = async (request, response, next) => {
    try {
        console.log("recipeInfo");
        const recipe = await getRecipesById({ ...request.params });
        console.log("[getRecipesById]", recipe);
        response.status(200).json(serializeRecipe(recipe));
    } catch (error) {
        console.log("[recipeInfo: Error]", error);
        next(error);
    }
};

const recipesInCookBook = async (request, response, next) => {
    try {
        console.log("[recipesInCookBook: params]", request.params.cookbook_id);
        const recipes = await getRecipesByCookbookId({ ...request.params });
        console.log("[getRecipesByCookbookId]", recipes);
        response.status(200).json({ recipes });
    } catch (error) {
        console.log("[recipesInCookBook: Error]", error);
        next(error);
    }
};

module.exports = { recipeInfo, recipesInCookBook };

const serializeRecipe = (recipe) => {
    return {
        recipe_id: recipe.recipe_id,
        cookbook_id: recipe.cookbook_id,
        chapter_id: recipe.chapter_id,
        owner_id: recipe.owner_id,
        recipe_name: recipe.recipe_name,
        instructions: recipe.instructions,
        prep_time: recipe.prep_time,
        difficulty_level: recipe.difficulty_level,
        recipe_story: recipe.recipe_story,
        recipe_photo: recipe.recipe_photo,
    };
};
