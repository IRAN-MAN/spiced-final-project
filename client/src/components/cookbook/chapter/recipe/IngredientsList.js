import { recipe } from "../../../constants/constants";

export default function IngredientsList({ ingredients }) {
    const renderIngredients = () => {
        // console.log("length:", ingredients_list.length);
        return ingredients.map((ingredient, i) => {
            return (
                <tr className="ingredient" key={i}>
                    <td className="u-align-end">
                        {ingredient.quantity + " "}
                        {ingredient.unit && ingredient.unit}
                    </td>
                    <td className="u-align-start">
                        {ingredient.ingredient_name}
                        {/* {i !== ingredients.length - 1 && recipe.comma} */}
                    </td>
                </tr>
            );
        });
    };

    return (
        <table className="recipe__details table__ingredients">
            <tbody>{renderIngredients()}</tbody>
        </table>
    );
}
