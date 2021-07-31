const { db } = require("./db");

const insertSecretCode = async ({ email, secret_code }) => {
    return await db.query(
        "INSERT INTO reset_codes (email, secret_code) VALUES ($1, $2)",
        [email, secret_code]
    );
};

const fetchSecretCode = async ({ email }) => {
    const secret_code = await db.query(
        `SELECT secret_code 
        FROM reset_codes 
        WHERE CURRENT_TIMESTAMP - created_at < INTERVAL '10 minutes' AND email = $1
        ORDER BY created_at DESC
        LIMIT 1`,
        [email]
    );
    return secret_code.rows[0].secret_code;
};

module.exports = { insertSecretCode, fetchSecretCode };
