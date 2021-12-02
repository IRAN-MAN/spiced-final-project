import { recipe } from "../../../constants/constants";

export default function IngredientsList({ ingredients_list }) {
    const renderIngredients = () => {
        // console.log("length:", ingredients_list.length);
        return ingredients_list.map((ingredient, i) => {
            const ingredientresult = (
                <span className="ingredient" key={i}>
                    {ingredient.quantity}
                    {ingredient.unit && ingredient.unit + " "}
                    {ingredient.ingredient_name}
                    {i !== ingredients_list.length - 1 && recipe.comma}
                </span>
            );

            return ingredientresult;
        });
    };

    return (
        <div>
            <p className="ingredients">
                <span className="bolder">
                    {recipe.ingredients + recipe.colon}
                </span>
                {renderIngredients()}
            </p>
        </div>
    );
}
