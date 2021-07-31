const {
    getIngredientListByRecipe,
    addNewIngredientList,
} = require("../database/ingredientListQueries");

const getIngredientList = async (request, response, next) => {
    try {
        console.log("getIngredientList", request.params);
        const ingredientList = await getIngredientListByRecipe({
            ...request.params,
        });
        console.log("getIngredientListByRecipe", ingredientList);
        if (!ingredientList) {
            response.status(404).json({ message: "No ingredients list found" });
            return;
        }
        response.status(200).json({ ingredientList });
    } catch (error) {
        console.log("[recipeInfo: Error]", error);
        next(error);
    }
};

const addIngredientList = async (request, response, next) => {
    try {
        console.log("addIngredientList", request.params, request.body);
        const newIngredient = await addNewIngredientList({
            ...request.params,
            ...request.body,
        });
        console.log("addNewIngredientList", newIngredient);
        response.status(200).json(serializeIngredientList(newIngredient));
    } catch (error) {
        console.log("[recipeInfo: Error]", error);
        next(error);
    }
};

module.exports = { getIngredientList, addIngredientList };

const serializeIngredientList = (list) => {
    return {
        ingredient_id: list.id,
        Ingredient_name: list.Ingredient_name,
        quantity: list.quantity,
        unit: list.unit,
        recipe_id: list.recipe_id,
    };
};
