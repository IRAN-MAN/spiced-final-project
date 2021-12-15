// Reducer
import { ActionTypes } from "..";
import { Reducer } from "redux";

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

export const reducer: Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.RECEIVE_STATE:
            return { ...state };
        case ActionTypes.RECEIVE_USERINFO:
            return {
                ...state,
                user: action.payload.user,
            };
        case ActionTypes.RECEIVE_CHAPTERS:
            return {
                ...state,
                chapters: action.payload.chapters,
            };
        case ActionTypes.RECEIVE_COOKBOOKS:
            return {
                ...state,
                cookbooks: action.payload.cookbooks,
            };
        case ActionTypes.RECEIVE_RECIPES:
            return {
                ...state,
                recipes: action.payload.recipes,
            };
        case ActionTypes.RECEIVE_COAUTHORS:
            return {
                ...state,
                coauthors: action.payload.coauthors,
            };
        case ActionTypes.RECEIVE_CURRENTRECIPE:
            return {
                ...state,
                currentRecipe: action.payload.currentRecipe,
            };
        case ActionTypes.RECEIVE_INGREDIENTSLIST:
            return {
                ...state,
                currentIngredients: action.payload.currentIngredients,
                editIngredients: action.payload.currentIngredients,
            };
        case ActionTypes.RECEIVE_CURRENTCOOKBOOK:
            return {
                ...state,
                currentCookbook: action.payload.currentCookbook,
            };
        case ActionTypes.RECEIVE_MYFAVOURITES:
            return {
                ...state,
                myFavourites: action.payload.favourites,
            };
        case ActionTypes.RECEIVE_ALLFAVOURITES:
            return {
                ...state,
                allFavourites: action.payload.favourites,
            };
        case ActionTypes.RECEIVE_AUTHORINFO:
            return {
                ...state,
                author: action.payload.author,
            };
        case ActionTypes.ADD_INGREDIENT:
            return {
                ...state,
                editIngredients: [
                    ...state.editIngredients,
                    action.payload.ingredient,
                ],
            };
        case ActionTypes.POPULATE_CURRENT_COOKBOOK:
            return {
                ...state,
                currentCookbook: action.payload.currentCookbook,
            };
        case ActionTypes.DELETE_INGREDIENT:
            console.log("DELETE");
            return {
                ...state,
                editIngredients: action.payload.newIngredients,
            };
        case ActionTypes.RECEIVE_RECIPE_PHOTOS:
            return {
                ...state,
                recipePhotos: action.payload.recipePhotos,
            };
        case ActionTypes.IS_LIGHTBOX_VISIBLE:
            return {
                ...state,
                isLightboxVisible: action.payload.isVisible,
            };
        case ActionTypes.ADD_RECIPE_PHOTO:
            return {
                ...state,
                recipePhotos: [
                    action.payload.recipePhoto,
                    ...state.recipePhotos,
                ],
            };
        case ActionTypes.UPDATE_USERINPUT:
            return {
                ...state,
                userInput: { ...state.userInput, ...action.payload.input },
            };
        case ActionTypes.UPDATE_USER:
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };
        case ActionTypes.CREATE_NEW_COOKBOOK:
            return {
                ...state,
                cookbooks: [action.payload.newCookbook, ...state.cookbooks],
            };
        case ActionTypes.UPDATE_COOKBOOK_COVER:
            return {
                ...state,
                currentCookbook: {
                    ...state.currentCookbook,
                    cover_pic: action.payload.cover_pic,
                },
            };
        case ActionTypes.UPDATE_PROFILE_PIC:
            return {
                ...state,
                user: {
                    ...state.user,
                    profile_pic: action.payload.profile_pic,
                },
            };
        case ActionTypes.UPDATE_RECIPE_PHOTO:
            return {
                ...state,
                currentRecipe: {
                    ...state.currentRecipe,
                    recipe_photo: action.payload.recipePhoto,
                },
            };
        case ActionTypes.GET_INVITE_LINK:
            return {
                ...state,
                inviteLink: action.payload.inviteLink,
            };
        case ActionTypes.ADD_NEW_POTATO:
            return {
                ...state,
                potatocount: state.potatocount + 1,
            };
        case ActionTypes.REMOVE_POTATO:
            return {
                ...state,
                potatocount: state.potatocount - 1,
            };
        case ActionTypes.RECEIVE_POTATOES:
            return {
                potatocount: action.payload.potatocount,
            };
        default:
            return state;
    }
};
