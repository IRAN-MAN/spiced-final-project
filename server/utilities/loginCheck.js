const { compare } = require("bcryptjs");
const { getUserByEmail } = require("../database/db");

const loginCheck = async ({ email, password }) => {
    const matchUser = await getUserByEmail({ email });
    if (!matchUser) {
        return null;
    }
    const match = await compare(password, matchUser.hashed_password);
    if (!match) {
        return null;
    }
    return matchUser;
};

module.exports = loginCheck;
