const express = require("express");
const recipesRoutes = express.Router();

const {
    recipeInfo,
    recipesInCookBook,
} = require("../middlewares/recipesHandler");

recipesRoutes.get("/:recipe_name", recipeInfo);
recipesRoutes.get("/:cookbook_id", recipesInCookBook);

module.exports = { recipesRoutes };
