import { instance as axios } from "../axios";
import { AxiosResponse } from "axios";

import { ActionTypes } from ".";

export const receiveUserInfo = async (user_id: number) => {
    const userInfo = await axios.get(`/api/users/profile/${user_id}`);
    // console.log("...(ACTION receiveUserInfo) userInfo.data:", userInfo.data);
    return {
        type: ActionTypes.RECEIVE_USERINFO,
        payload: { user: userInfo.data },
    };
};

export const receiveChapters = async () => {
    const chapters = await axios.get(`/api/chapters`);
    // console.log("...(ACTION receiveChapters) chapters.data:", chapters.data);
    return {
        type: ActionTypes.RECEIVE_CHAPTERS,
        payload: { chapters: chapters.data.chaptersinfo },
    };
};

export const receiveCookbooks = async (user_id: number) => {
    const cookbooks = await axios.get(`/api/cookbooks/${user_id}`);
    // console.log(
    //     "...(ACTION receiveCookbooks) cookbooks:",
    //     cookbooks.data.cookbooks
    // );
    return {
        type: ActionTypes.RECEIVE_COOKBOOKS,
        payload: { cookbooks: cookbooks.data },
    };
};

export const receiveCurrentCookbook = async (cookbook_id: number) => {
    const cookbook = await axios.get(`/api/cookbooks/by_id/${cookbook_id}`);
    // console.log("...(ACTION receiveCurrentCookbook) cookbook:", cookbook.data);
    return {
        type: ActionTypes.RECEIVE_CURRENTCOOKBOOK,
        payload: { currentCookbook: cookbook.data },
    };
};

export const receiveRecipes = async (cookbook_id: number) => {
    // console.log("receiveRecipes cookbook_id:", cookbook_id);
    const recipes = await axios.get(`/api/recipes/by_cookbook/${cookbook_id}`);
    // console.log(
    //     "...(ACTION receiveRecipes) recipes.data:",
    //     recipes.data.recipes
    // );
    return {
        type: ActionTypes.RECEIVE_RECIPES,
        payload: { recipes: recipes.data.recipes },
    };
};

export const receiveFavourites = async (user_id: number) => {
    const favourites = await axios.get(`/api/facourite_recipes/${user_id}`);
    console.log(
        "...(ACTION receiveFavourites) favourites.data:",
        favourites.data
    );
    return {
        type: ActionTypes.RECEIVE_MYFAVOURITES,
        payload: { favourites: favourites.data },
    };
};

export const receiveAllFavourites = async (recipe_id: number) => {
    const favourites = await axios.get(`/api/facourite_recipes/${recipe_id}`);
    console.log(
        "...(ACTION receiveAllFavourites) favourites.data:",
        favourites.data
    );
    return {
        type: ActionTypes.RECEIVE_ALLFAVOURITES,
        payload: { favourites: favourites.data },
    };
};

export const receiveCurrentRecipe = async (recipe_id: number) => {
    const recipe = await axios.get(`/api/recipes/${recipe_id}`);
    // console.log("...(ACTION receiveCurrentRecipe) recipe.data:", recipe.data);
    return {
        type: ActionTypes.RECEIVE_CURRENTRECIPE,
        payload: { currentRecipe: recipe.data },
    };
};

export const receiveCoauthors = async (cookbook_id: number) => {
    const coauthors = await axios.get(`/api/co_authors/${cookbook_id}`);
    // console.log(
    //     "...(ACTION receiveCoauthors) coauthors.data.allCoAuthors:",
    //     coauthors.data.allCoAuthors
    // );
    return {
        type: ActionTypes.RECEIVE_COAUTHORS,
        payload: { coauthors: coauthors.data.allCoAuthors },
    };
};
export const receiveIngredientslist = async (recipe_id: number) => {
    const currentIngredientsList = await axios.get(
        `/api/ingredients_list/${recipe_id}`
    );
    // console.log(
    //     "...(ACTION receiveCurrentIngredientslist) ingredients_list.data.ingredientList:",
    //     ingredients_list.data.ingredientList
    // );
    return {
        type: ActionTypes.RECEIVE_INGREDIENTSLIST,
        payload: {
            currentIngredients: currentIngredientsList.data.ingredientList,
        },
    };
};

export const receiveAuthorInfo = async (user_id: number) => {
    const author = await axios.get(`/api/users/profile/${user_id}`);
    // console.log("...(ACTION receiveAuthorInfo) author.data:", author.data);
    return {
        type: ActionTypes.RECEIVE_AUTHORINFO,
        payload: {
            author: author.data,
        },
    };
};

export const addIngredients = (ingredient: {
    quantity: number;
    unit: string;
    ingredient_name: string;
}) => {
    return {
        type: ActionTypes.ADD_INGREDIENT,
        payload: {
            ingredient,
        },
    };
};

interface AxiosResponseWithMessage extends AxiosResponse {
    message?: string;
}
export const sendRecipeInfo = async (
    recipeInfo: any,
    chapter_id: number,
    cookbook_id: number
) => {
    const { message }: AxiosResponseWithMessage = await axios.post(
        `/api/recipes/add_recipe?chapter_id=${chapter_id}&cookbook_id=${cookbook_id}`,
        recipeInfo
    );
    // console.log("[sendRecipeInfo: axios]", message);
    return {
        type: ActionTypes.SEND_RECIPE_INFO,
        payload: {
            message,
        },
    };
};

export const populateCurrentCookbook = (currentCookbook: {
    cookbook_name: string;
    author: string;
    cover_pic: string;
}) => {
    return {
        type: ActionTypes.POPULATE_CURRENT_COOKBOOK,
        payload: {
            currentCookbook: currentCookbook,
        },
    };
};

export const deleteIngredientById = (id: number, ingredients: any) => {
    const newIngredients = ingredients.filter((_: any, i: number) => i !== id);
    // console.log("newIngredients", newIngredients);
    return {
        type: ActionTypes.DELETE_INGREDIENT,
        payload: {
            newIngredients: newIngredients,
        },
    };
};

export const receiveRecipePhotos = async (recipe_id: number) => {
    const recipePhotos = await axios.get(`/api/recipes/photos/${recipe_id}`);
    // console.log(
    //     "...(ACTION receiveRecipePhotos) recipePhotos.data:",
    //     recipePhotos.data
    // );
    return {
        type: ActionTypes.RECEIVE_RECIPE_PHOTOS,
        payload: { recipePhotos: recipePhotos.data },
    };
};

export const toggleLightboxVisible = (isVisible: boolean) => {
    return {
        type: ActionTypes.IS_LIGHTBOX_VISIBLE,
        payload: { isVisible: !isVisible },
    };
};

export const addRecipePhoto = (photo: any) => {
    return {
        type: ActionTypes.ADD_RECIPE_PHOTO,
        payload: {
            recipePhoto: photo,
        },
    };
};

export const uploadRecipePhoto = async (formData: any, recipe_id: number) => {
    const recipePhoto = await axios.post(
        `/api/recipes/photos/add_photo/${recipe_id}`,
        formData
    );
    // console.log(
    //     "...(ACTION uploadRecipePhoto) recipePhoto.data: ",
    //     recipePhoto.data
    // );
    return {
        type: ActionTypes.UPDATE_RECIPE_PHOTO,
        payload: { recipePhoto: recipePhoto.data.recipe_photo },
    };
};

export const uploadCookbookCover = async (
    formData: any,
    cookbook_id: number
) => {
    const cover_pic = await axios.put(
        `/api/cookbooks/update_cover/${cookbook_id}`,
        formData
    );
    // console.log(
    //     "...(ACTION uploadCookbookCover) cover_pic.data: ",
    //     cover_pic.data
    // );
    return {
        type: ActionTypes.UPDATE_COOKBOOK_COVER,
        payload: { cover_pic: cover_pic.data },
    };
};
export const uploadProfilePic = async (formData: any) => {
    const profile_pic = await axios.post(
        `/api/users/profile/upload_profile_pic`,
        formData
    );
    // console.log(
    //     "...(ACTION uploadProfilePic) profile_pic.data: ",
    //     profile_pic.data
    // );
    return {
        type: ActionTypes.UPDATE_PROFILE_PIC,
        payload: { profile_pic: profile_pic.data },
    };
};

export const onUserInputChange = (input: {
    first_name: string;
    last_name: string;
    email: string;
    about: string;
    city: string;
}) => {
    // console.log("...(ACTIONS onUserInputChange) input: ", input);
    return {
        type: ActionTypes.UPDATE_USERINPUT,
        payload: { input },
    };
};

export const updateAccount = async (editUserInfo: any) => {
    // console.log("...(ACTIONS updateAccount) editUserInfo: ", editUserInfo);
    const user = await axios.post("/api/users/edit_userInfo", editUserInfo);
    // console.log("...(ACTIONS updateAccount) user: ", user.data);
    return {
        type: ActionTypes.UPDATE_USER,
        payload: user.data,
    };
};

export const createNewCookbook = async (cookbookInfo: any) => {
    const newCookbook = await axios.post(
        `/api/cookbooks/create_cookbook`,
        cookbookInfo
    );
    // console.log(
    //     "...(ACTION createNewCookbook) newCookbook.data:",
    //     newCookbook.data
    // );
    return {
        type: ActionTypes.CREATE_NEW_COOKBOOK,
        payload: {
            newCookbook: newCookbook.data,
        },
    };
};

export const getInviteLink = (link: string) => {
    return {
        type: ActionTypes.GET_INVITE_LINK,
        payload: {
            inviteLink: link,
        },
    };
};

export const addPotato = async (recipe_id: number) => {
    const potatocount = await axios.post(
        `/api/favourite_recipes/add_fav/${recipe_id}`
    );
    console.log("...(ACTION addFavourite) potatocount.data:", potatocount.data);
    return {
        type: ActionTypes.ADD_NEW_POTATO,
        payload: {
            potatocount: potatocount.data,
        },
    };
};
export const removePotato = async (recipe_id: number) => {
    const potatocount = await axios.delete(
        `/api/favourite_recipes/remove_fav/${recipe_id}`
    );
    console.log("...(ACTION removePotato) potatocount.data:", potatocount.data);
    return {
        type: ActionTypes.REMOVE_POTATO,
        payload: {
            potatocount: potatocount.data,
        },
    };
};
export const receivePotatoCount = async (recipe_id: number) => {
    const potatocount = await axios.get(
        `/api/favourite_recipes/count_by_recipe/${recipe_id}`
    );
    console.log(
        "...(ACTION receivePotatoCount) potatocount.data:",
        potatocount.data
    );
    return {
        type: ActionTypes.RECEIVE_POTATOES,
        payload: {
            potatocount: potatocount.data,
        },
    };
};

export const receivePotatoButtonState = async (user_id: number) => {
    const potatoButtonState = await axios.get(`/api/potato/${user_id}`);
    console.log(
        "...(ACTION receivePotatoButtonState) potatoButtonState:",
        potatoButtonState.data.hasGivenPotato
    );
    return {
        type: ActionTypes.RECEIVE_POTATOBUTTON,
        payload: { potatoButtonState: potatoButtonState.data.hasGivenPotato },
    };
};
