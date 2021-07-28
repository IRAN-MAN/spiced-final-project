const userfavouriteRecipes = async (request, response, next) => {
    try {
        console.log("userfavouriteRecipes");
    } catch (error) {
        console.log("[userfavouriteRecipes: Error]", error);
        next(error);
    }
};

const mostfavouriteRecipe = async (request, response, next) => {
    try {
        console.log("mostfavouriteRecipe");
    } catch (error) {
        console.log("[mostfavouriteRecipe: Error]", error);
        next(error);
    }
};

const addfavouriteRecipe = async (request, response, next) => {
    try {
        console.log("addfavouriteRecipe");
    } catch (error) {
        console.log("[addfavouriteRecipe: Error]", error);
        next(error);
    }
};

const removefavouriteRecipe = async (request, response, next) => {
    try {
        console.log("removefavouriteRecipe");
    } catch (error) {
        console.log("[removefavouriteRecipe: Error]", error);
        next(error);
    }
};

module.exports = {
    userfavouriteRecipes,
    mostfavouriteRecipe,
    addfavouriteRecipe,
    removefavouriteRecipe,
};
