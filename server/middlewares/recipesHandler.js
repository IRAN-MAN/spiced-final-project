const {
    getRecipesByCookbookId,
    getRecipesById,
    insertRecipe,
    updateRecipe,
} = require("../database/recipeQueries");

const { addNewIngredientList } = require("../database/ingredientListQueries");

const recipeInfo = async (request, response, next) => {
    try {
        console.log("[recipeInfo: params]", request.params);
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

const addRecipeInCookBook = async (request, response, next) => {
    const recipeInfo = request.body.recipeInfo;
    const ingredients = request.body.ingredients;
    try {
        console.log(
            "[addRecipeInCookBook: query and body]",
            request.query,
            request.body
        );
        const newRecipeId = await insertRecipe({
            ...request.query,
            ...recipeInfo,
        });
        console.log("[insertRecipe]", newRecipeId);
        response.status(201).json({ ...newRecipeId });
        addIngredientToDB({ ingredients, ...newRecipeId });
    } catch (error) {
        console.log("[addRecipeInCookBook: Error]", error);
        next(error);
    }
};

const addRecipePhoto = async (request, response, next) => {
    try {
        console.log("[addRecipePhoto: params]", request.params.cookbook_id);
        const recipes = await getRecipesByCookbookId({ ...request.params });
        console.log("[getRecipesByCookbookId]", recipes);
        response.status(200).json({ recipes });
    } catch (error) {
        console.log("[recipesInCookBook: Error]", error);
        next(error);
    }
};

const editRecipeInCookBook = async (request, response, next) => {
    try {
        console.log(
            "[editRecipeInCookBook: params and body]",
            request.params,
            request.body
        );
        const updatedRecipe = await updateRecipe({
            ...request.params,
            ...request.body,
        });
        console.log("updateRecipe", updatedRecipe);
        response.status(200).json(serializeRecipe(updatedRecipe));
    } catch (error) {
        console.log("[cookBookInfo: Error]", error);
        next(error);
    }
};

module.exports = {
    recipeInfo,
    recipesInCookBook,
    addRecipeInCookBook,
    addRecipePhoto,
    editRecipeInCookBook,
};

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

const addIngredientToDB = (ingredients, id) => {
    ingredients.forEach(async (ingredient) => {
        try {
            await addNewIngredientList({ ...ingredient, id });
        } catch (error) {
            console.log("[addIngredientToDB: Error]", error);
        }
    });
};
