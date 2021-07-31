const {
    getIngredientListByRecipe,
    updateIngredientList,
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

const editIngredientList = async (request, response, next) => {
    try {
        console.log(
            "[editIngredientList: params, body]",
            request.params,
            request.body
        );
        const updatedngredient = await updateIngredientList({
            ...request.params,
            ...request.body,
        });
        console.log("[updateIngredientList]", updatedngredient);
        response.status(200).json(serializeIngredientList(updatedngredient));
    } catch (error) {
        console.log("[recipeInfo: Error]", error);
        next(error);
    }
};

module.exports = { getIngredientList, editIngredientList };

const serializeIngredientList = (list) => {
    return {
        ingredient_id: list.id,
        Ingredient_name: list.Ingredient_name,
        quantity: list.quantity,
        unit: list.unit,
        recipe_id: list.recipe_id,
    };
};
