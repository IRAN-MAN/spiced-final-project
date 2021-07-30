const express = require("express");
const ingredientsListRoutes = express.Router();

const errorHandler = require("../middlewares/errorHandler");

const {
    getIngredientList,
    addIngredientList,
} = require("../middlewares/ingredientsListHandler");

ingredientsListRoutes.get("/:recipe_id", getIngredientList, errorHandler);
ingredientsListRoutes.post("/:recipe_id", addIngredientList, errorHandler);

module.exports = { ingredientsListRoutes };
