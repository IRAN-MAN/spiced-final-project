import { Link } from "react-router-dom";
const DEFAULT_COVER = "/images/default_photo.jpeg";

// components
import { Gallery } from "../../elements/Gallery";

// hooks
import { useSelector } from "react-redux";
import { useCurrentWidth } from "../../../hooks/hooks";

export default function Chapter({ chapter_id }) {
    const recipes = useSelector((state) => state.recipes);
    let windowWidth = useCurrentWidth();

    //filter recipes by chapter
    const filteredRecipes = () => {
        // console.log("...(Chapter) filteredRecipes recipes:", recipes);
        return recipes.filter((recipe) => {
            return recipe.chapter_id == chapter_id;
        });
    };

    const renderRecipe = (recipe, id) => {
        // console.log("...(Chapter) renderRecipe recipe: ", recipe);
        return (
            <li key={id} className="cookbookWrapper">
                <Link to={"/recipe/" + recipe.recipe_id} key={recipe.recipe_id}>
                    <div className="recipePreviewWrapper flex jcc fcolumn">
                        <img
                            className="recipePreview boxShadowL"
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
            {windowWidth > 768 && (
                <Gallery
                    elements={filteredRecipes()}
                    elementsPerPage={4}
                    render={renderRecipe}
                />
            )}
            {windowWidth <= 768 && (
                <Gallery
                    elements={filteredRecipes()}
                    elementsPerPage={1}
                    render={renderRecipe}
                />
            )}
            {/* {recipes.length > 0 && renderRecipePreviews()} */}
            {/* <Gallery
                    elements={filteredRecipes()}
                    elementsPerPage={3}
                    render={renderRecipe}
                /> */}
        </div>
    );
}
