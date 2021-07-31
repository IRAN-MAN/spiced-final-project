const express = require("express");
const ingredientsListRoutes = express.Router();

const errorHandler = require("../middlewares/errorHandler");

const {
    getIngredientList,
    editIngredientList,
} = require("../middlewares/ingredientsListHandler");

ingredientsListRoutes.get("/:recipe_id", getIngredientList, errorHandler);
ingredientsListRoutes.post(
    "/edit_ingredient/:ingredient_id",
    editIngredientList,
    errorHandler
);

module.exports = { ingredientsListRoutes };
