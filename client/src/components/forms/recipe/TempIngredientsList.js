import { useDispatch } from "react-redux";
import { deleteIngredientById } from "../../../redux/action-creators.ts";

export default function TempIngredientsList({ ingredients }) {
    console.log("TempList:", ingredients);
    const dispatch = useDispatch();

    const deleteIngredient = (id) => {
        dispatch(deleteIngredientById(id, ingredients));
    };

    const renderIngredients = () => {
        return ingredients.map((ingredient, index) => {
            return (
                <li key={index}>
                    {ingredient.quantity} {ingredient.unit}{" "}
                    {ingredient.ingredient_name}
                    <button onClick={() => deleteIngredient(index)}>×</button>
                </li>
            );
        });
    };

    return (
        <ul className="ingredientslist">
            {ingredients.length > 0 && renderIngredients()}
        </ul>
    );
}
