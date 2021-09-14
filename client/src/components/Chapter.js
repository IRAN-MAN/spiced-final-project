import { Link } from "react-router-dom";
const DEFAULT_COVER = "/images/default_photo.jpeg";

// components
import Gallery from "./Gallery";

// hooks
import { useSelector } from "react-redux";

export default function Chapter({ chapter_id }) {
    const recipes = useSelector((state) => state.recipes);

    //filter recipes by chapter
    const filteredRecipes = () => {
        // console.log("...(Chapter) filteredRecipes recipes:", recipes);
        return recipes.filter((recipe) => {
            return recipe.chapter_id == chapter_id;
        });
    };

    const renderRecipe = (recipe) => {
        // console.log("...(Chapter) renderRecipe recipe: ", recipe);
        return (
            <li key={recipe.recipe_id}>
                <Link to={"/recipe/" + recipe.recipe_id}>
                    <div className="recipePreviewWrapper flex jcc fcolumn">
                        <img
                            className="recipePreview"
                            src={recipe.recipe_photo || DEFAULT_COVER}
                        />
                    </div>
                    <p>{recipe.recipe_name}</p>
                </Link>
            </li>
        );
    };

    return (
        <div className="chapterWrapper flex cc fcolumn">
            <ul className="flex jcc">
                {/* {recipes.length > 0 && renderRecipePreviews()} */}
                <Gallery
                    elements={filteredRecipes()}
                    elementsPerPage={3}
                    render={renderRecipe}
                />
            </ul>
        </div>
    );
}
