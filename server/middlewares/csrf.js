const protectorMiddleware = (request, response, next) => {
    response.set("x-frame-options", "deny");
    response.cookie("myCsrfToken", request.csrfToken());
    next();
};

module.exports = { protectorMiddleware };
