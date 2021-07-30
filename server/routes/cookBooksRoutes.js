const express = require("express");
const cookBooksRoutes = express.Router();

const errorHandler = require("../middlewares/errorHandler");

const {
    cookBookInfo,
    createCookBook,
    updateCookBookInfo,
} = require("../middlewares/cookBooksHandler");

cookBooksRoutes.get("/:user_id", cookBookInfo, errorHandler);

cookBooksRoutes.post("/create_cookbook", createCookBook, errorHandler);

cookBooksRoutes.put("/update_info", updateCookBookInfo, errorHandler);

module.exports = { cookBooksRoutes };
