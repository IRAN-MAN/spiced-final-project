import { useSelector } from "react-redux";
import { recipesTEST } from "./TESTDATA.js";
import { Link } from "react-router-dom";

// components
import Recipe from "./Recipe";
import Gallery from "./Gallery";

export default function Chapter({ chapter_id }) {
    const recipes = useSelector((state) => state.recipes);

    //filter recipes by chapter
    const filteredRecipes = () => {
        // console.log("...(Chapter) filteredRecipes recipes:", recipes);
        return recipes
            .filter((recipe) => {
                return recipe.chapter_id == chapter_id;
            })
            .reverse();
    };

    const renderRecipe = (recipe) => {
        // console.log("...(Chapter) renderRecipe recipe: ", recipe);
        return (
            <li key={recipe.recipe_id}>
                <Link to={"/recipe/" + recipe.recipe_id}>
                    <div className="recipePreviewWrapper flex jcc fcolumn">
                        <img
                            className="recipePreview"
                            src={recipe.recipe_photo}
                        />
                    </div>
                    <p>{recipe.recipe_name}</p>
                </Link>
            </li>
        );
    };
    return (
        <div className="chapterWrapper flex cc fcolumn">
            Chapter Component
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
