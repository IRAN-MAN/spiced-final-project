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
    RECEIVE_RECIPE_PHOTOS,
    RECEIVE_CURRENTRECIPE,
    RECEIVE_USERINFO,
    RECEIVE_AUTHORINFO,
    ADD_INGREDIENT,
    POPULATE_CURRENT_COOKBOOK,
    DELETE_INGREDIENT,
    IS_LIGHTBOX_VISIBLE,
    ADD_RECIPE_PHOTO,
    UPDATE_USERINPUT,
    UPDATE_USER,
    CREATE_NEW_COOKBOOK,
    UPDATE_COOKBOOK_COVER,
    UPDATE_PROFILE_PIC,
    GET_INVITE_LINK,
    UPDATE_RECIPE_PHOTO,
    ADD_NEW_POTATO,
    REMOVE_POTATO,
    RECEIVE_POTATOES,
} from "./actions";

// import { addIngredients } from "./action-creators";

const initialState = {
    allFavourites: [],
    author: {},
    chapters: [],
    coauthors: [],
    cookbooks: [],
    currentCookbook: {},
    currentRecipe: {},
    editIngredients: [],
    currentIngredients: [],
    isLightboxVisible: false,
    myFavourites: [],
    recipes: [],
    recipePhotos: [],
    user: {},
    userInput: {},
    inviteLink: "",
    potatocount: 0,
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
                currentIngredients: action.payload.currentIngredients,
                editIngredients: action.payload.currentIngredients,
            };
        case RECEIVE_CURRENTCOOKBOOK:
            return {
                ...state,
                currentCookbook: action.payload.currentCookbook,
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
        case ADD_INGREDIENT:
            return {
                ...state,
                editIngredients: [
                    ...state.editIngredients,
                    action.payload.ingredient,
                ],
            };
        case POPULATE_CURRENT_COOKBOOK:
            return {
                ...state,
                currentCookbook: action.payload.currentCookbook,
            };
        case DELETE_INGREDIENT:
            console.log("DELETE");
            return {
                ...state,
                editIngredients: action.payload.newIngredients,
            };
        case RECEIVE_RECIPE_PHOTOS:
            return {
                ...state,
                recipePhotos: action.payload.recipePhotos,
            };
        case IS_LIGHTBOX_VISIBLE:
            return {
                ...state,
                isLightboxVisible: action.payload.isVisible,
            };
        case ADD_RECIPE_PHOTO:
            return {
                ...state,
                recipePhotos: [
                    action.payload.recipePhoto,
                    ...state.recipePhotos,
                ],
            };
        case UPDATE_USERINPUT:
            return {
                ...state,
                userInput: { ...state.userInput, ...action.payload.input },
            };
        case UPDATE_USER:
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };
        case CREATE_NEW_COOKBOOK:
            return {
                ...state,
                cookbooks: [action.payload.newCookbook, ...state.cookbooks],
            };
        case UPDATE_COOKBOOK_COVER:
            return {
                ...state,
                currentCookbook: {
                    ...state.currentCookbook,
                    cover_pic: action.payload.cover_pic,
                },
            };
        case UPDATE_PROFILE_PIC:
            return {
                ...state,
                user: {
                    ...state.user,
                    profile_pic: action.payload.profile_pic,
                },
            };
        case UPDATE_RECIPE_PHOTO:
            return {
                ...state,
                currentRecipe: {
                    ...state.currentRecipe,
                    recipe_photo: action.payload.recipePhoto,
                },
            };
        case GET_INVITE_LINK:
            return {
                ...state,
                inviteLink: action.payload.inviteLink,
            };
        case ADD_NEW_POTATO:
            return {
                ...state,
                potatocount: state.potatocount + 1,
            };
        case REMOVE_POTATO:
            return {
                ...state,
                potatocount: state.potatocount - 1,
            };
        case RECEIVE_POTATOES:
            return {
                potatocount: action.payload.potatocount,
            };
        default:
            return state;
    }
};

export default reducer;
