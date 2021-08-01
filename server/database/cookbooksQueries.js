const { db } = require("./db");

const getCookBookByUserId = async ({ user_id }) => {
    const cookbooks = await db.query(
        `SELECT cookbooks.id AS cookbook_id, 
            cookbook_name, cover_pic, author, cookbooks.created_at,
            first_name AS author_first_name, last_name AS author_last_name  
        FROM cookbooks
        JOIN users
        On author = users.id        
        WHERE author = ($1)`,
        [user_id]
    );
    return cookbooks.rows;
};

const getCookBookById = async ({ cookbook_id }) => {
    const cookbook = await db.query(
        `SELECT cookbooks.id AS cookbook_id, 
            cookbook_name, cover_pic, author, cookbooks.created_at,
            first_name AS author_first_name, last_name AS author_last_name  
        FROM cookbooks
        JOIN users
        On author = users.id        
        WHERE cookbooks.id = ($1)`,
        [cookbook_id]
    );
    return cookbook.rows;
};

const createCookbook = async ({ cookbook_name, author }) => {
    const newCookbook = await db.query(
        `INSERT INTO cookbooks 
        (cookbook_name, author) 
        VALUES ($1, $2) RETURNING *`,
        [cookbook_name, author]
    );
    return newCookbook.rows[0];
};

const updateCookbookCover = async ({ cookbook_id, imgURL }) => {
    const cover_pic = await db.query(
        `UPDATE cookbooks 
        SET cover_pic = $1
        WHERE id = $2
        RETURNING * `,
        [imgURL, cookbook_id]
    );
    return cover_pic.rows[0].cover_pic;
};

const updateCookBook = async ({
    cookbook_id,
    isPrivate,
    cookbook_name,
    author,
}) => {
    const updatedCookbook = await db.query(
        `UPDATE cookbooks 
        SET isPrivate = $1,
        cookbook_name = $2,
        author = $3
        WHERE id = $4
        RETURNING * `,
        [isPrivate, cookbook_name, author, cookbook_id]
    );
    return updatedCookbook.rows[0];
};

module.exports = {
    getCookBookByUserId,
    getCookBookById,
    createCookbook,
    updateCookbookCover,
    updateCookBook,
};
