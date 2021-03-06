const {
    getFavRecipesByUserId,
    getMostFavRecipe,
    insertFavRecipe,
    deleteFavRecipe,
} = require("../database/favRecipesQueries");

const userfavouriteRecipes = async (request, response, next) => {
    try {
        console.log("[userfavouriteRecipes : user_id]", request.params);
        const favRecipes = await getFavRecipesByUserId({ ...request.params });
        console.log("[getFavRecipesByUserId]", favRecipes);
        response.status(200).json({ favRecipes });
    } catch (error) {
        console.log("[userfavouriteRecipes: Error]", error);
        next(error);
    }
};

const mostfavouriteRecipe = async (request, response, next) => {
    try {
        console.log("[mostfavouriteRecipe : recipe_id]", request.params);
        const mostFavRecipe = await getMostFavRecipe();
        console.log("[getMostFavRecipe]", mostFavRecipe);
        response.status(200).json(serializeRecipe(mostFavRecipe));
    } catch (error) {
        console.log("[mostfavouriteRecipe: Error]", error);
        next(error);
    }
};

const addfavouriteRecipe = async (request, response, next) => {
    try {
        console.log("[addfavouriteRecipe : recipe_id]", request.params);
        const addedFavRecipe = await insertFavRecipe({
            ...request.params,
            ...request.session,
        });
        console.log("[insertFavRecipe]", addedFavRecipe);
        response.status(200).json(serializeRecipe(addedFavRecipe));
    } catch (error) {
        console.log("[addfavouriteRecipe: Error]", error);
        next(error);
    }
};

const removefavouriteRecipe = async (request, response, next) => {
    try {
        console.log("[removefavouriteRecipe : recipe_id]", request.params);
        await deleteFavRecipe({ ...request.params });
        response.status(200).json({ message: "Delete successful" });
    } catch (error) {
        console.log("[removefavouriteRecipe: Error]", error);
        next(error);
    }
};

module.exports = {
    userfavouriteRecipes,
    mostfavouriteRecipe,
    addfavouriteRecipe,
    removefavouriteRecipe,
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
