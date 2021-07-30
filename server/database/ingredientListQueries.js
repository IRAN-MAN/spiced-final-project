const { db } = require("./db");

const getIngredientListByRecipe = async ({ recipe_id }) => {
    const ingredient = await db.query(
        "SELECT * FROM Ingredients_list WHERE recipe_id = $1",
        [recipe_id]
    );
    return ingredient.rows[0];
};

module.exports = {
    getIngredientListByRecipe,
};
