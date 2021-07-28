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
    return db
        .query(
            `INSERT INTO users (first_name, last_name, email, hashed_password, temp_token) 
            VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [first_name, last_name, email, hashed_password]
        )
        .then((user) => user.rows[0]);
};

module.exports = { createUser };
