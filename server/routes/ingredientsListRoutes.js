const express = require("express");
const ingredientsListRoutes = express.Router();

const {
    getIngredientList,
    addIngredientList,
} = require("../middlewares/ingredientsListHandler");

ingredientsListRoutes.get("/:recipe_id", getIngredientList);
ingredientsListRoutes.post("/:recipe_id", addIngredientList);

module.exports = { ingredientsListRoutes };
