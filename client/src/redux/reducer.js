/* eslint-disable indent */
// Reducer
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
    RECEIVE_CURRENTRECIPE,
    RECEIVE_USERINFO,
    RECEIVE_AUTHORINFO,
} from "./actions";

const initialState = {
    allFavourites: [],
    author: {},
    chapters: [],
    coauthors: [],
    cookbooks: [],
    currentCookbook: {},
    currentRecipe: {},
    ingredients_list: [],
    myFavourites: [],
    recipes: [],
    user: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_STATE:
            return { ...state };
        case RECEIVE_USERINFO:
            return {
                ...state,
                user: action.payload.user,
            };
        case RECEIVE_CHAPTERS:
            return {
                ...state,
                chapters: action.payload.chapters,
            };
        case RECEIVE_COOKBOOKS:
            return {
                ...state,
                cookbooks: action.payload.cookbooks,
            };
        case RECEIVE_RECIPES:
            return {
                ...state,
                recipes: action.payload.recipes,
            };
        case RECEIVE_COAUTHORS:
            return {
                ...state,
                coauthors: action.payload.coauthors,
            };
        case RECEIVE_CURRENTRECIPE:
            return {
                ...state,
                currentRecipe: action.payload.currentRecipe,
            };
        case RECEIVE_INGREDIENTSLIST:
            return {
                ...state,
                ingredients_list: action.payload.ingredients_list,
            };
        case RECEIVE_CURRENTCOOKBOOK:
            return {
                ...state,
                currentCookbook: action.payload.cookbook,
            };
        case RECEIVE_MYFAVOURITES:
            return {
                ...state,
                myFavourites: action.payload.favourites,
            };
        case RECEIVE_ALLFAVOURITES:
            return {
                ...state,
                allFavourites: action.payload.favourites,
            };
        case RECEIVE_AUTHORINFO:
            return {
                ...state,
                author: action.payload.author,
            };
        default:
            return state;
    }
};

export default reducer;
