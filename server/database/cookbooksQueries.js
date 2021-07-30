const { db } = require("./db");

const getCookBookByUserId = async ({ user_id }) => {
    const cookbooks = await db.query(
        `SELECT cookbooks.id, users.id, isPrivate, 
            cookbook_name, cover_pic, author, cookbooks.created_at,
            first_name AS author_first_name, last_name AS author_last_name  
        FROM cookbooks
        JOIN users
        On author = users.id
        Join co_authors
        ON ( cookbook_id = cookbooks.id AND user_id = ($1))`,
        [user_id]
    );
    return cookbooks.rows;
};

module.exports = {
    getCookBookByUserId,
};
