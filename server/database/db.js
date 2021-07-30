const spicedPg = require("spiced-pg");

const DBName = "communal_cookbook";

const { userName, password } = require("../../secrets.json");

//
const db = spicedPg(
    `postgres:${userName}:${password}@localhost:5432/${DBName}`
);
// const db = spicedPg(process.env.DATABASE_URL);

console.log(`Database is connected to: ${DBName}`);

module.exports = { db };
