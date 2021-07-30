const { db } = require("./db");

const getAllCoAuthors = async ({ cookbook_id }) => {
    const allCoAuthors = await db.query(
        `SELECT co_authors.id AS coauthor_id, first_name, last_name, profile_pic
        FROM users
        JOIN co_authors
        ON (user_id = users.id)
        WHERE cookbook_id = $1`,
        [cookbook_id]
    );
    return allCoAuthors.rows;
};

module.exports = {
    getAllCoAuthors,
};
