const { cookieSessionMiddleware } = require("./cookieSession");

const io_cookieSession = function (socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
};

module.exports = { io_cookieSession };
