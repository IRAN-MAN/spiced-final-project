export default function IngredientsList(props) {
    const renderIngredients = () => {
        return props.ingredients_list.map((ingredient) => {
            const ingredientresult = (
                <span className="ingredient" key={ingredient.id}>
                    {ingredient.quantity}
                    {ingredient.unit} {ingredient.ingredient_name},{" "}
                </span>
            );

            return ingredientresult;
        });
    };

    return (
        <div>
            <p className="ingredients">
                <span className="bolder">Ingredients: </span>
                {renderIngredients()}
            </p>
        </div>
    );
}
