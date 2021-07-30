const {
    getIngredientListByRecipe,
} = require("../database/ingredientListQueries");

const getIngredientList = async (request, response, next) => {
    try {
        console.log("getIngredientList", request.params);
        const ingredientList = await getIngredientListByRecipe({
            ...request.params,
        });
        console.log("getIngredientListByRecipe", ingredientList);
        response.status(200).json({ ingredientList });
    } catch (error) {
        console.log("[recipeInfo: Error]", error);
        next(error);
    }
};

const addIngredientList = async (request, response, next) => {
    try {
        console.log("recipeInfo");
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
