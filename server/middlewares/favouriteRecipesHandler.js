const { getFavRecipesByUserId } = require("../database/favRecipesQueries");

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
        console.log("mostfavouriteRecipe");
    } catch (error) {
        console.log("[mostfavouriteRecipe: Error]", error);
        next(error);
    }
};

const addfavouriteRecipe = async (request, response, next) => {
    try {
        console.log("addfavouriteRecipe");
    } catch (error) {
        console.log("[addfavouriteRecipe: Error]", error);
        next(error);
    }
};

const removefavouriteRecipe = async (request, response, next) => {
    try {
        console.log("removefavouriteRecipe");
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
