import axios from "../axios";
import {
    RECEIVE_CHAPTERS,
    RECEIVE_COAUTHORS,
    RECEIVE_COOKBOOKS,
    RECEIVE_CURRENTCOOKBOOK,
    RECEIVE_MYFAVOURITES,
    RECEIVE_ALLFAVOURITES,
    RECEIVE_INGREDIENTSLIST,
    RECEIVE_RECIPES,
    RECEIVE_CURRENTRECIPE,
    RECEIVE_USERINFO,
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

//maybe not necessary, cause we already got all the connected cookbooks together
export const receiveCurrentCookbook = async (cookbook_id) => {
    const cookbook = await axios.get(`/api/cookbooks/${cookbook_id}`);
    console.log("...(ACTION receiveCurrentCookbook) cookbooks:", cookbook.data);
    return {
        type: RECEIVE_CURRENTCOOKBOOK,
        payload: { currentCookbook: cookbook.data },
    };
};

export const receiveRecipes = async (cookbook_id) => {
    const recipes = await axios.get(`/api/recipes/${cookbook_id}`);
    console.log("...(ACTION receiveRecipes) recipes.data:", recipes.data);
    return {
        type: RECEIVE_RECIPES,
        payload: { recipes: recipes.data },
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

export const receiveCurrentRecipe = async (cookbook_id) => {
    const recipe = await axios.get(`/api/recipes/${cookbook_id}`);
    console.log("...(ACTION receiveCurrentRecipe) recipe.data:", recipe.data);
    return {
        type: RECEIVE_CURRENTRECIPE,
        payload: { currentRecipe: recipe.data },
    };
};

export const receiveCoauthors = async (cookbook_id) => {
    const coauthors = await axios.get(`/api/coauthors/${cookbook_id}`);
    console.log("...(ACTION receiveCoauthors) coauthors.data:", coauthors.data);
    return {
        type: RECEIVE_COAUTHORS,
        payload: { coauthors: coauthors.data },
    };
};
export const receiveCurrentIngredientslist = async (recipe_id) => {
    const ingredients_list = await axios.get(
        `/api/ingredients_list/${recipe_id}`
    );
    console.log(
        "...(ACTION receiveCurrentIngredientslist) ingredients_list.data:",
        ingredients_list.data
    );
    return {
        type: RECEIVE_INGREDIENTSLIST,
        payload: {
            ingredients_list: ingredients_list.data,
        },
    };
};
