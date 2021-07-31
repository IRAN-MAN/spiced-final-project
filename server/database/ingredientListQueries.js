const { db } = require("./db");

const getIngredientListByRecipe = async ({ recipe_id }) => {
    const ingredient = await db.query(
        "SELECT * FROM Ingredients_list WHERE recipe_id = $1",
        [recipe_id]
    );
    return ingredient.rows;
};

const addNewIngredientList = async ({
    Ingredient_name,
    quantity,
    unit,
    recipe_id,
}) => {
    const newIngredient = await db.query(
        `INSERT INTO Ingredients_list 
        (Ingredient_name, quantity, unit, recipe_id) 
        VALUES ($1, $2, $3, $4) RETURNING *`,
        [Ingredient_name, quantity, unit, recipe_id]
    );
    return newIngredient.rows[0];
};

const updateIngredientList = async ({
    Ingredient_name,
    quantity,
    unit,
    ingredient_id,
}) => {
    const ingredient = await db.query(
        `UPDATE cookbooks 
        SET Ingredient_name = $1,
        quantity = $2,
        unit = $3
        WHERE id = $4
        RETURNING * `,
        [Ingredient_name, quantity, unit, ingredient_id]
    );
    return ingredient.rows[0];
};

module.exports = {
    getIngredientListByRecipe,
    addNewIngredientList,
    updateIngredientList,
};
