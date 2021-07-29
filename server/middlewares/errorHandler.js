const errorHandler = (error, request, response) => {
    error.status = error.status || 500;
    response.status(error.status).json({ message: error.message });
};

module.exports = errorHandler;
