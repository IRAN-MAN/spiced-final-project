import { useSelector } from "react-redux";
import { recipesTEST } from "./TESTDATA.js";

// components
import Recipe from "./Recipe";
import Gallery from "./Gallery";

export default function Chapter({ chapter_id }) {
    const recipes = useSelector((state) => state.recipes);

    //filter recipes by chapter

    const renderRecipePreviews = () => {
        return recipesTEST
            .filter((recipe) => {
                // console.log(
                //     "renderRecipePreviews recipe.chapter_id == chapter_id: ",
                //     recipe.chapter_id,
                //     chapter_id
                // );
                return recipe.chapter_id == chapter_id;
            })
            .map((recipe) => {
                return (
                    <li key={recipe.id}>
                        <div className="recipePreviewWrapper flex jcc fcolumn">
                            <img className="recipePreview" src="" />
                            <p>{recipe.recipe_name}</p>
                        </div>
                    </li>
                );
            });
    };

    return (
        <div className="chapterWrapper flex cc fcolumn">
            Chapter Component
            <ul className="flex jcc">
                {recipesTEST.length > 0 && renderRecipePreviews()}
            </ul>
        </div>
    );
}
