const express = require("express");
const recipesRoutes = express.Router();

const {
    recipeInfo,
    recipesInCookBook,
} = require("../middlewares/recipesHandler");

recipesRoutes.get("/:recipe_id", recipeInfo);
recipesRoutes.get("/by_cookbook/:cookbook_id", recipesInCookBook);

module.exports = { recipesRoutes };
