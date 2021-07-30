import { useSelector } from "react-redux";

// components
import Recipe from "./Recipe";
import Gallery from "./Gallery";

export default function Chapter({ chapter_id }) {
    const recipes = useSelector((state) => state.recipes);

    //filter recipes by chapter

    const recipesTEST = [
        {
            id: 1,
            chapter_id: 2,
            recipe_name: "Pasta",
        },
        {
            id: 2,
            chapter_id: 1,
            recipe_name: "Pasta",
        },
        {
            id: 3,
            chapter_id: 4,
            recipe_name: "Pasta Salad",
        },
        {
            id: 4,
            chapter_id: 2,
            recipe_name: "Chocolate Cake",
        },
        {
            id: 5,
            chapter_id: 2,
            recipe_name: "Apple Cake",
        },
        {
            id: 6,
            chapter_id: 1,
            recipe_name: "Vanilla Cake",
        },
        {
            id: 7,
            chapter_id: 1,
            recipe_name: "Potato Soup",
        },
        {
            id: 8,
            chapter_id: 3,
            recipe_name: "Tomato Soup",
        },
    ];

    const renderRecipePreviews = () => {
        return recipesTEST
            .filter((recipe) => {
                console.log(
                    "renderRecipePreviews recipe.chapter_id == chapter_id: ",
                    recipe.chapter_id,
                    chapter_id
                );
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
