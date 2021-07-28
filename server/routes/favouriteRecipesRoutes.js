const express = require("express");
const favouriteRecipesRoutes = express.Router();

const {
    userfavouriteRecipes,
    mostfavouriteRecipe,
    addfavouriteRecipe,
    removefavouriteRecipe,
} = require("../middlewares/favouriteRecipesHandler");

favouriteRecipesRoutes.get("/:user_id", userfavouriteRecipes);
favouriteRecipesRoutes.get("/:recipe_id", mostfavouriteRecipe);

favouriteRecipesRoutes.post("/add_fav/:recipe_id", addfavouriteRecipe);

favouriteRecipesRoutes.put("/remove_fav/:recipe_id", removefavouriteRecipe);

module.exports = { favouriteRecipesRoutes };
