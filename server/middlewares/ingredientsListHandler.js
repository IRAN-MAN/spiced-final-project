const getIngredientList = async (request, response, next) => {
    try {
        console.log("recipeInfo");
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
