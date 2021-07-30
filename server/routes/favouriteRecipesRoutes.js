const express = require("express");
const favouriteRecipesRoutes = express.Router();

const errorHandler = require("../middlewares/errorHandler");

const {
    userfavouriteRecipes,
    mostfavouriteRecipe,
    addfavouriteRecipe,
    removefavouriteRecipe,
} = require("../middlewares/favouriteRecipesHandler");

favouriteRecipesRoutes.get(
    "/user/:user_id",
    userfavouriteRecipes,
    errorHandler
);
favouriteRecipesRoutes.get("/most_fav", mostfavouriteRecipe, errorHandler);

favouriteRecipesRoutes.post(
    "/add_fav/:recipe_id",
    addfavouriteRecipe,
    errorHandler
);

favouriteRecipesRoutes.delete(
    "/remove_fav/:recipe_id",
    removefavouriteRecipe,
    errorHandler
);

module.exports = { favouriteRecipesRoutes };
