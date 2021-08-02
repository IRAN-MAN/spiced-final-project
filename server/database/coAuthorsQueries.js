const { db } = require("./db");

const getAllCoAuthors = async ({ cookbook_id }) => {
    const allCoAuthors = await db.query(
        `SELECT co_authors.id AS coauthor_id, users.id AS user_id, first_name, last_name, profile_pic
        FROM users
        JOIN co_authors
        ON (user_id = users.id)
        WHERE cookbook_id = $1`,
        [cookbook_id]
    );
    return allCoAuthors.rows;
};

const insertCoAuthor = async ({ user_id, cookbook_id }) => {
    const addedCoAuthor = await db.query(
        "INSERT INTO co_authors (user_id, cookbook_id) VALUES ($1, $2) RETURNING *",
        [user_id, cookbook_id]
    );
    return addedCoAuthor.rows[0];
};

const deleteCoAuthor = async ({ user_id, cookbook_id }) => {
    await db.query(
        "DELETE FROM co_authors WHERE (user_id = $1 AND cookbook_id = $2) RETURNING *",
        [user_id, cookbook_id]
    );
};

const getCoAuthorById = async ({ user_id, cookbook_id }) => {
    const foundCoAuthor = await db.query(
        `SELECT user_id FROM co_authors
        WHERE user_id = $1 AND cookbook_id = $2`,
        [user_id, cookbook_id]
    );
    return foundCoAuthor.rows[0];
};

module.exports = {
    getAllCoAuthors,
    getCoAuthorById,
    insertCoAuthor,
    deleteCoAuthor,
};
