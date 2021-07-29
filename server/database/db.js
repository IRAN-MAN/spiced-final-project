const spicedPg = require("spiced-pg");

const DBName = "communal_cookbook";

const { userName, password } = require("../../secrets.json");

//
const db = spicedPg(
    `postgres:${userName}:${password}@localhost:5432/${DBName}`
);
// const db = spicedPg(process.env.DATABASE_URL);

console.log(`Database is connected to: ${DBName}`);

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

const getChapters = async () => {
    const chapters = await db.query("SELECT * FROM chapters");
    return chapters.rows;
};

module.exports = { createUser, getUserByEmail, getUserById, getChapters };
