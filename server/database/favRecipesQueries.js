const { db } = require("./db");

const getFavRecipesByUserId = async ({ user_id }) => {
    const faveRecipes = await db.query(``);
    return faveRecipes.rows;
};

module.exports = { getFavRecipesByUserId };
