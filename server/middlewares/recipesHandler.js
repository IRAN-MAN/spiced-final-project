const {
    getRecipesByCookbookId,
    getRecipesById,
    insertRecipe,
    updateRecipe,
    getRecipePhotos,
    insertRecipePhoto,
    getLastesPhotoByRecipe,
} = require("../database/recipeQueries");

const { addNewIngredientList } = require("../database/ingredientListQueries");

const recipeInfo = async (request, response, next) => {
    try {
        console.log("[recipeInfo: params]", request.params);
        const recipe = await getRecipesById({ ...request.params });
        console.log("[getRecipesById]", recipe);
        response.status(200).json(serializeRecipe(recipe));
    } catch (error) {
        console.log("[recipeInfo: Error]", error);
        next(error);
    }
};

const recipesInCookBook = async (request, response, next) => {
    try {
        console.log("[recipesInCookBook: params]", request.params.cookbook_id);
        const recipes = await getRecipesByCookbookId({ ...request.params });
        // const latestPhotos = getLatesPhotos(recipes);
        // console.log("[getRecipesByCookbookId]", recipes);
        // console.log("[getLatesPhotos]", latestPhotos);
        response.status(200).json({ recipes });
    } catch (error) {
        console.log("[recipesInCookBook: Error]", error);
        next(error);
    }
};

const addRecipeInCookBook = async (request, response, next) => {
    console.log(
        "[addRecipeInCookBook: query and body]",
        request.query,
        request.body
    );
    const { recipeDetails, ingredients } = request.body;
    const owner_id = request.session.user_id;
    try {
        const newRecipeId = await insertRecipe({
            ...request.query,
            ...recipeDetails,
            owner_id,
        });
        const recipe_id = newRecipeId.recipe_id;
        console.log("[insertRecipe]", newRecipeId);
        response.status(201).json({ message: "We are SMART" });
        addIngredientToDB(ingredients, recipe_id);
        console.log("[SUCCESS]");
    } catch (error) {
        console.log("[addRecipeInCookBook: Error]", error);
        next(error);
    }
};

const addRecipePhoto = async (request, response, next) => {
    const { filename } = request.file;
    const imgURL = `https://community-cookbook.s3.amazonaws.com/${filename}`;
    try {
        console.log("[addRecipePhoto: params]", request.params);
        const addedRecipePhoto = await insertRecipePhoto({
            ...request.params,
            ...request.session,
            imgURL,
        });
        console.log("[insertRecipePhoto]", addedRecipePhoto);
        response.status(200).json(addedRecipePhoto);
    } catch (error) {
        console.log("[recipesInCookBook: Error]", error);
        next(error);
    }
};

const editRecipeInCookBook = async (request, response, next) => {
    try {
        console.log(
            "[editRecipeInCookBook: params and body]",
            request.params,
            request.body
        );
        const updatedRecipe = await updateRecipe({
            ...request.params,
            ...request.body,
        });
        console.log("updateRecipe", updatedRecipe);
        response.status(200).json(serializeRecipe(updatedRecipe));
    } catch (error) {
        console.log("[cookBookInfo: Error]", error);
        next(error);
    }
};

const recipePhotos = async (request, response, next) => {
    try {
        console.log("[recipePhotos: params]", request.params);
        const recipePhotos = await getRecipePhotos({ ...request.params });
        console.log("[getRecipePhotos]", recipePhotos);
        response.status(200).json(recipePhotos);
    } catch (error) {
        console.log("[recipesInCookBook: Error]", error);
        next(error);
    }
};

module.exports = {
    recipeInfo,
    recipesInCookBook,
    addRecipeInCookBook,
    addRecipePhoto,
    editRecipeInCookBook,
    recipePhotos,
};

const serializeRecipe = (recipe) => {
    return {
        recipe_id: recipe.recipe_id,
        cookbook_id: recipe.cookbook_id,
        chapter_id: recipe.chapter_id,
        owner_id: recipe.owner_id,
        recipe_name: recipe.recipe_name,
        instructions: recipe.instructions,
        prep_time: recipe.prep_time,
        difficulty_level: recipe.difficulty_level,
        recipe_story: recipe.recipe_story,
        recipe_photo: recipe.recipe_photo,
    };
};

const addIngredientToDB = (ingredients, recipe_id) => {
    ingredients.forEach(async (ingredient) => {
        try {
            await addNewIngredientList({ ...ingredient, recipe_id });
        } catch (error) {
            console.log("[addIngredientToDB: Error]", error);
        }
    });
};

const getLatesPhotos = (recipes) => {
    const latestPhotos = [];
    const photo = new Promise(
        recipes.forEach((recipe) => {
            getLastesPhotoByRecipe({ ...recipe }).then((obj) => {
                return Promise.resolve(obj);
            });
        })
    );
    latestPhotos.push(photo);
    console.log("[Photos Array]", latestPhotos);
};
