export default function IngredientsList(props) {
    const renderIngredients = () => {
        // console.log(
        //     "...(IngredientsList renderIngredients) ",
        //     props.ingredients_list
        // );
        return props.ingredients_list.map((ingredient) => {
            // console.log("ingredient:", ingredient);
            const ingredientresult = (
                <span className="ingredient" key={ingredient.id}>
                    {ingredient.quantity}
                    {ingredient.unit} {ingredient.ingredient_name},{" "}
                </span>
            );
            // console.log(
            //     "...(IngredientsList renderIngredients) result: ",
            //     ingredientresult
            // );
            return ingredientresult;
        });
    };

    return (
        <div className="ingredientsWrapper flex cc">
            <p className="ingredients">
                <span className="bolder">Ingredients: </span>
                {renderIngredients()}
            </p>
        </div>
    );
}
