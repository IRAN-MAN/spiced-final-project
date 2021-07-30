const express = require("express");
const favouriteRecipesRoutes = express.Router();

const {
    userfavouriteRecipes,
    mostfavouriteRecipe,
    addfavouriteRecipe,
    removefavouriteRecipe,
} = require("../middlewares/favouriteRecipesHandler");

favouriteRecipesRoutes.get("/user/:user_id", userfavouriteRecipes);
favouriteRecipesRoutes.get("/most_fav", mostfavouriteRecipe);

favouriteRecipesRoutes.post("/add_fav/:recipe_id", addfavouriteRecipe);

favouriteRecipesRoutes.delete("/remove_fav/:recipe_id", removefavouriteRecipe);

module.exports = { favouriteRecipesRoutes };
