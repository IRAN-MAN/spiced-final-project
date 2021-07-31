const { db } = require("./db");

const createUser = async ({
    first_name,
    last_name,
    email,
    hashed_password,
}) => {
    const createdUser = await db.query(
        `INSERT INTO users (first_name, last_name, email, hashed_password) 
            VALUES ($1, $2, $3, $4) RETURNING *`,
        [first_name, last_name, email, hashed_password]
    );

    return createdUser.rows[0];
};

const getUserByEmail = async ({ email }) => {
    const user = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
    ]);
    return user.rows[0];
};

const getUserById = async ({ user_id }) => {
    const user = await db.query("SELECT * FROM users WHERE id = $1", [user_id]);
    return user.rows[0];
};

const updateProfilePic = async ({ user_id, imgURL }) => {
    const profile_pic = await db.query(
        `UPDATE users 
        SET profile_pic = $1
        WHERE id = $2
        RETURNING * `,
        [imgURL, user_id]
    );
    return profile_pic.rows[0].profile_pic;
};

const updateUser = async ({
    first_name,
    last_name,
    email,
    about,
    city,
    user_id,
}) => {
    const updatedUser = await db.query(
        `UPDATE users
            SET first_name = $1, last_name = $2, email = $3, about = $4, city =$5
            WHERE id = $6 RETURNING *`,
        [first_name, last_name, email, about, city, user_id]
    );
    return updatedUser.rows[0];
};

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    updateProfilePic,
    updateUser,
};
