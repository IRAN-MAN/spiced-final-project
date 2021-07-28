const { genSalt, hash } = require("bcryptjs");

const hashPassword = (password) => {
    return genSalt().then((salt) => hash(password, salt));
};

module.exports = { hashPassword };
