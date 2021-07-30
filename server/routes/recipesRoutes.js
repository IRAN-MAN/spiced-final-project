const express = require("express");
const recipesRoutes = express.Router();

const errorHandler = require("../middlewares/errorHandler");

const {
    recipeInfo,
    recipesInCookBook,
} = require("../middlewares/recipesHandler");

recipesRoutes.get("/:recipe_id", recipeInfo, errorHandler);
recipesRoutes.get("/by_cookbook/:cookbook_id", recipesInCookBook, errorHandler);

module.exports = { recipesRoutes };
