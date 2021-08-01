import axios from "../axios";
import {
    RECEIVE_STATE,
    RECEIVE_CHAPTERS,
    RECEIVE_COAUTHORS,
    RECEIVE_COOKBOOKS,
    RECEIVE_CURRENTCOOKBOOK,
    RECEIVE_MYFAVOURITES,
    RECEIVE_ALLFAVOURITES,
    RECEIVE_INGREDIENTSLIST,
    RECEIVE_RECIPES,
    RECEIVE_RECIPE_PHOTOS,
    RECEIVE_CURRENTRECIPE,
    RECEIVE_USERINFO,
    RECEIVE_AUTHORINFO,
    ADD_INGREDIENT,
    SEND_RECIPE_INFO,
    POPULATE_CURRENT_COOKBOOK,
    DELETE_INGREDIENT,
    IS_LIGHTBOX_VISIBLE,
    ADD_RECIPE_PHOTO,
    UPDATE_USERINPUT,
    UPDATE_USER,
    CREATE_NEW_COOKBOOK,
    UPDATE_COOKBOOK_COVER,
} from "./actions";

export const receiveUserInfo = async (user_id) => {
    const userInfo = await axios.get(`/api/users/profile/${user_id}`);
    // console.log("...(ACTION receiveUserInfo) userInfo.data:", userInfo.data);
    return {
        type: RECEIVE_USERINFO,
        payload: { user: userInfo.data },
    };
};

export const receiveChapters = async () => {
    const chapters = await axios.get(`/api/chapters`);
    // console.log("...(ACTION receiveChapters) chapters.data:", chapters.data);
    return {
        type: RECEIVE_CHAPTERS,
        payload: { chapters: chapters.data.chaptersinfo },
    };
};

export const receiveCookbooks = async (user_id) => {
    const cookbooks = await axios.get(`/api/cookbooks/${user_id}`);
    // console.log(
    //     "...(ACTION receiveCookbooks) cookbooks:",
    //     cookbooks.data.cookbooks
    // );
    return {
        type: RECEIVE_COOKBOOKS,
        payload: { cookbooks: cookbooks.data.cookbooks },
    };
};

export const receiveCurrentCookbook = async (cookbook_id) => {
    const cookbook = await axios.get(`/api/cookbooks/by_id/${cookbook_id}`);
    console.log("...(ACTION receiveCurrentCookbook) cookbooks:", cookbook);
    return {
        type: RECEIVE_CURRENTCOOKBOOK,
        payload: { currentCookbook: cookbook.data },
    };
};

export const receiveRecipes = async (cookbook_id) => {
    console.log("receiveRecipes cookbook_id:", cookbook_id);
    const recipes = await axios.get(`/api/recipes/by_cookbook/${cookbook_id}`);
    // console.log(
    //     "...(ACTION receiveRecipes) recipes.data:",
    //     recipes.data.recipes
    // );
    return {
        type: RECEIVE_RECIPES,
        payload: { recipes: recipes.data.recipes },
    };
};

export const receiveFavourites = async (user_id) => {
    const favourites = await axios.get(`/api/facourite_recipes/${user_id}`);
    console.log(
        "...(ACTION receiveFavourites) favourites.data:",
        favourites.data
    );
    return {
        type: RECEIVE_MYFAVOURITES,
        payload: { favourites: favourites.data },
    };
};

export const receiveAllFavourites = async (recipe_id) => {
    const favourites = await axios.get(`/api/facourite_recipes/${recipe_id}`);
    console.log(
        "...(ACTION receiveAllFavourites) favourites.data:",
        favourites.data
    );
    return {
        type: RECEIVE_ALLFAVOURITES,
        payload: { favourites: favourites.data },
    };
};

export const receiveCurrentRecipe = async (recipe_id) => {
    const recipe = await axios.get(`/api/recipes/${recipe_id}`);
    // console.log("...(ACTION receiveCurrentRecipe) recipe.data:", recipe.data);
    return {
        type: RECEIVE_CURRENTRECIPE,
        payload: { currentRecipe: recipe.data },
    };
};

export const receiveCoauthors = async (cookbook_id) => {
    const coauthors = await axios.get(`/api/co_authors/${cookbook_id}`);
    console.log(
        "...(ACTION receiveCoauthors) coauthors.data.allCoAuthors:",
        coauthors.data.allCoAuthors
    );
    return {
        type: RECEIVE_COAUTHORS,
        payload: { coauthors: coauthors.data.allCoAuthors },
    };
};
export const receiveIngredientslist = async (recipe_id) => {
    const ingredients_list = await axios.get(
        `/api/ingredients_list/${recipe_id}`
    );
    // console.log(
    //     "...(ACTION receiveCurrentIngredientslist) ingredients_list.data.ingredientList:",
    //     ingredients_list.data.ingredientList
    // );
    return {
        type: RECEIVE_INGREDIENTSLIST,
        payload: {
            ingredients_list: ingredients_list.data.ingredientList,
        },
    };
};

export const receiveAuthorInfo = async (user_id) => {
    const author = await axios.get(`/api/users/profile/${user_id}`);
    // console.log("...(ACTION receiveAuthorInfo) author.data:", author.data);
    return {
        type: RECEIVE_AUTHORINFO,
        payload: {
            author: author.data,
        },
    };
};

export const addIngredients = (ingredient) => {
    return {
        type: ADD_INGREDIENT,
        payload: {
            ingredient,
        },
    };
};

export const sendRecipeInfo = async (recipeInfo, chapter_id, cookbook_id) => {
    const { message } = await axios.post(
        `/api/recipes/add_recipe?chapter_id=${chapter_id}&cookbook_id=${cookbook_id}`,
        recipeInfo
    );
    console.log("[sendRecipeInfo: axios]", message);
    return {
        type: SEND_RECIPE_INFO,
        payload: {
            message,
        },
    };
};

export const populateCurrentCookbook = (currentCookbook) => {
    return {
        type: POPULATE_CURRENT_COOKBOOK,
        payload: {
            currentCookbook: currentCookbook,
        },
    };
};

export const deleteIngredientById = (id, ingredients) => {
    id--;

    const newIngredients = ingredients.filter((_, i) => i != id);
    console.log("newIngredients", newIngredients);
    return {
        type: DELETE_INGREDIENT,
        payload: {
            newIngredients: newIngredients,
        },
    };
};

export const receiveRecipePhotos = async (recipe_id) => {
    const recipePhotos = await axios.get(`/api/recipes/photos/${recipe_id}`);
    console.log(
        "...(ACTION receiveRecipePhotos) recipePhotos.data:",
        recipePhotos.data
    );
    return {
        type: RECEIVE_RECIPE_PHOTOS,
        payload: { recipePhotos: recipePhotos.data },
    };
};

export const toggleLightboxVisible = (isVisible) => {
    return {
        type: IS_LIGHTBOX_VISIBLE,
        payload: { isVisible: !isVisible },
    };
};

export const uploadRecipePhoto = async (formData, recipe_id) => {
    const recipePhoto = await axios.post(
        `/api/recipes/photos/add_photo/${recipe_id}`,
        formData
    );
    console.log(
        "...(ACTION uploadRecipePhoto) recipePhoto.data: ",
        recipePhoto.data
    );
    return {
        type: ADD_RECIPE_PHOTO,
        payload: { recipePhoto: recipePhoto.data },
    };
};

export const uploadCookbookCover = async (formData, cookbook_id) => {
    const cookbook = await axios.post(
        `/api/cookbooks/update_cover/${cookbook_id}`,
        formData
    );
    console.log(
        "...(ACTION uploadCookbookCover) cookbook.data: ",
        cookbook.data
    );
    return {
        type: UPDATE_COOKBOOK_COVER,
        payload: { cookbook: cookbook.data },
    };
};

export const onUserInputChange = (input) => {
    console.log("...(ACTIONS onUserInputChange) input: ", input);
    return {
        type: UPDATE_USERINPUT,
        payload: { input },
    };
};

export const updateAccount = async (editUserInfo) => {
    console.log("...(ACTIONS updateAccount) editUserInfo: ", editUserInfo);
    const user = await axios.post("/api/users/edit_userInfo", editUserInfo);
    console.log("...(ACTIONS updateAccount) user: ", user.data);
    return {
        type: UPDATE_USER,
        payload: user.data.rows[0],
    };
};

export const createNewCookbook = async (cookbookInfo) => {
    const newCookbook = await axios.post(
        `/api/cookbooks/create_cookbook`,
        cookbookInfo
    );
    console.log(
        "...(ACTION createNewCookbook) newCookbook.data:",
        newCookbook.data
    );
    return {
        type: CREATE_NEW_COOKBOOK,
        payload: { recipePhotos: newCookbook.data },
    };
};
