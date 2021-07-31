export default function IngredientInput() {
    return (
        <ol>
            <li>
                <label htmlFor="quantity">
                    Quantity
                    <input
                        type="number"
                        name="quantity"
                        placeholder="quantity"
                        required
                    />
                </label>

                <label htmlFor="unit">
                    unit
                    <select name="unit">
                        <option value="l">litre</option>
                        <option value="ml">millilitre</option>
                        <option value="cup">cup</option>
                        <option value="g">gramm</option>
                        <option value="kg">kilogramm</option>
                        <option value="tsp">teaspoon</option>
                        <option value="tbsp">tablespoon</option>
                    </select>
                </label>
                <label htmlFor="ingredient">
                    ingredient
                    <input
                        type="text"
                        name="ingredient"
                        placeholder="ingredient"
                        required
                    />
                </label>
            </li>
        </ol>
    );
}
