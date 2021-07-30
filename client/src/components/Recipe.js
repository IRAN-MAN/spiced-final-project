import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { receiveCurrentRecipe } from "../redux/action-creators";

export default function RecipeList({ recipe_id }) {
    //need to think about this:
    const currentRecipe = useSelector((state) => state.currentRecipe);
    const recipePhotos = useSelector((state) => state.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(receiveCurrentRecipe(recipe_id));
    }, []);

    return <p>Recipe Component</p>;
}
