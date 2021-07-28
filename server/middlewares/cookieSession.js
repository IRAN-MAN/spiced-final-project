const cookieSession = require("cookie-session");

const { sessionSecret } = require("../../secrets.json");

const cookieSessionMiddleware = cookieSession({
    secret: sessionSecret, //process.env.SESSION_SECRET,
    maxAge: 1000 * 60 * 60 * 24 * 14,
});

module.exports = { cookieSessionMiddleware };
