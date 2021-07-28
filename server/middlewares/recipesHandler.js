const recipeInfo = async (request, response, next) => {
    try {
        console.log("recipeInfo");
    } catch (error) {
        console.log("[recipeInfo: Error]", error);
        next(error);
    }
};

const recipesInCookBook = async (request, response, next) => {
    try {
        console.log("recipesInCookBook");
    } catch (error) {
        console.log("[recipesInCookBook: Error]", error);
        next(error);
    }
};

module.exports = { recipeInfo, recipesInCookBook };
