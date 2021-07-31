const { db } = require("./db");

const getCookBookByUserId = async ({ user_id }) => {
    const cookbooks = await db.query(
        `SELECT cookbooks.id AS cookbook_id, isPrivate, 
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

const createCookbook = async ({ isPrivate, cookbook_name, author }) => {
    const newCookbook = await db.query(
        `INSERT INTO cookbooks 
        (isPrivate, cookbook_name, author) 
        VALUES ($1, $2, $3) RETURNING *`,
        [isPrivate, cookbook_name, author]
    );
    return newCookbook.rows[0];
};

module.exports = {
    getCookBookByUserId,
    createCookbook,
};
