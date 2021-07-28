const { compare } = require("bcryptjs");
const { getUserByEmail } = require("../database/db");

const loginCheck = ({ email, password }) => {
    return getUserByEmail({ email }).then((matchUser) => {
        if (!matchUser) {
            return null;
        }
        return compare(password, matchUser.hashed_password).then((match) => {
            if (match) {
                return matchUser;
            }
            return null;
        });
    });
};

module.exports = loginCheck;
