const protectorMiddleware = (request, response, next) => {
    response.set("x-frame-options", "deny");
    response.cookie("csrfToken", request.csrfToken());
    next();
};

module.exports = { protectorMiddleware };
