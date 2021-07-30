import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { receiveCurrentRecipe } from "../redux/action-creators";

//components
import Gallery from "./Gallery";

export default function RecipeList({ recipe_id }) {
    //need to think about this:
    const currentRecipe = useSelector((state) => state.currentRecipe);
    const recipePhotos = useSelector((state) => state.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("...(Recipe EFFECT) recipe_id: ", recipe_id);
        if (recipe_id) {
            dispatch(receiveCurrentRecipe(recipe_id));
        }
    }, []);

    return <p>Recipe Component</p>;
}
